import "./product.scss";
import Img from "../lazyLoadImage/Img";
import { Link } from "react-router-dom";

const Product = ({ id, name, image }) => {
  return (
    <div className="product">
      <div className="image-container">
        <Img src={image} />
      </div>
      <div className="details">
        <p className="product-name">{name}</p>
        <Link to={`/products/${id}`}>
          <button>
            More Details
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
