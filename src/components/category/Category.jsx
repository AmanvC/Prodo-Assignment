import { imageBaseUrl } from "../../utils/constants";
import "./category.scss";
import Img from "../lazyLoadImage/Img";
import { Link } from "react-router-dom";

const Category = ({ id, image, name, desc }) => {
  return (
    <div className="category">
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
