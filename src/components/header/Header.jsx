import { Link } from "react-router-dom";

import "./header.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { imageBaseUrl } from "../../utils/constants";
import { useDispatch } from "react-redux";
import {
  changeSelectedCategory,
  changeSelectedPage,
} from "../../store/slice/categoryProductsSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(changeSelectedPage({ page: 1 }));
    dispatch(changeSelectedCategory({ selectedcategory: null }));
  };

  return (
    <div className="header">
      <ContentWrapper>
        <div className="left-header">
          <Link to={"https://prodo.in/"}>
            <img
              className="brand"
              src={`${imageBaseUrl}/assets/img/PRODO_logo.png`}
              alt="logo"
            />
          </Link>
        </div>
        <div className="right-header">
          <Link to={"/categories"}>
            <button onClick={handleButtonClick}>Categories</button>
          </Link>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
