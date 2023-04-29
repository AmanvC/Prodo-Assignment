import { useDispatch } from "react-redux";

import {
  changeSelectedPage,
  fetchCategoryProducts,
} from "../../store/slice/categoryProductsSlice";
import "./navigationBar.scss";

const NavigationBar = ({ totalPages, currentPage, categoryId }) => {
  const maxPageNumberLimit =
    currentPage === 1 || currentPage === 2
      ? 5
      : currentPage + 2 >= totalPages
      ? totalPages
      : currentPage + 2;
  const minPageNumberLimit = maxPageNumberLimit - 4;

  const dispatch = useDispatch();

  let pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  const handleChangePageNumber = (newPageNumber) => {
    dispatch(fetchCategoryProducts({ id: categoryId, page: newPageNumber }));
    dispatch(changeSelectedPage({ page: newPageNumber }));
  };

  const handleNextPage = () => {
    const newPageNumber = currentPage + 1;
    dispatch(changeSelectedPage({ page: newPageNumber }));
    dispatch(fetchCategoryProducts({ id: categoryId, page: newPageNumber }));
  };

  const handlePrevPage = () => {
    const newPageNumber = currentPage - 1;
    dispatch(changeSelectedPage({ page: newPageNumber }));
    dispatch(fetchCategoryProducts({ id: categoryId, page: newPageNumber }));
  };

  const handleFirst = () => {
    dispatch(changeSelectedPage({ page: 1 }));
    dispatch(fetchCategoryProducts({ id: categoryId, page: 1 }));
  };

  const handleLast = () => {
    dispatch(changeSelectedPage({ page: totalPages }));
    dispatch(fetchCategoryProducts({ id: categoryId, page: totalPages }));
  };

  return (
    <div className="navigation-bar">
      <ul>
        <button
          onClick={handleFirst}
          className="extra"
          disabled={currentPage === 1}
        >
          First
        </button>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {pagesArray.map(
          (pageNumber) =>
            pageNumber < maxPageNumberLimit + 1 &&
            pageNumber > minPageNumberLimit - 1 && (
              <li
                onClick={() => handleChangePageNumber(pageNumber)}
                className={currentPage === pageNumber ? "active" : null}
                key={pageNumber}
              >
                {pageNumber}
              </li>
            )
        )}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <button
          className="extra"
          onClick={handleLast}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </ul>
    </div>
  );
};

export default NavigationBar;
