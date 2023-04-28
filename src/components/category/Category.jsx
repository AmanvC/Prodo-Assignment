import { imageBaseUrl } from "../../utils/constants";
import "./category.scss";
import Img from "../lazyLoadImage/Img";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedCategory } from "../../store/slice/categoryProductsSlice";

const Category = ({ id, image, name, desc }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="category"
      onClick={() => dispatch(selectedCategory({ selectedCategory: name }))}
    >
      <Link to={`/categories/${id}`}>
        <Img src={imageBaseUrl + image} />
        <div className="details">
          <h1>{name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Category;
