import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardBackspace, MdEco } from "react-icons/md";
import { GiGreenPower } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaBoxes, FaRupeeSign } from "react-icons/fa";

import "./productDetails.scss";
import { fetchProductDetails } from "../../store/slice/productDetailSlice";
import Img from "../../components/lazyLoadImage/Img";
import Error from "../../components/error/Error";

const ProductDetails = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();

  const categoryId = useSelector(
    (state) => state.categoryProducts.selectedCategory
  );

  const {
    isLoading,
    data: productDetails,
    isError,
  } = useSelector((state) => state.productDetails);
  console.log(productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails({ id: productId }));
  }, [productId]);

  const skeletonItem = () => {
    return (
      <div className="skeleton-item">
        <div className="left">
          <div className="image skeleton"></div>
        </div>
        <div className="right">
          <div className="title skeleton"></div>
          <div className="logos skeleton"></div>
          <div className="shipment skeleton"></div>
          <div className="price skeleton"></div>
          <div className="description skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="product-details">
      <div className="heading">
        <Link to={`/categories/${categoryId || productDetails?.categoryId}`}>
          <MdKeyboardBackspace style={{ position: "relative", top: 2 }} />{" "}
          <span>All Products</span>
        </Link>
      </div>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <div className="loading-skeleton">{skeletonItem()}</div>
      ) : (
        <div className="details-container">
          <div className="left">
            <Img src={productDetails?.productImages[0]} />
          </div>
          <div className="right">
            <h1 className="product-name">{productDetails?.productName}</h1>
            <div className="hr"></div>
            <div className="logos">
              {productDetails?.ecoFriendly && (
                <MdEco style={{ color: "green", fontSize: "2em" }} />
              )}
              {productDetails?.greenProduct && (
                <GiGreenPower style={{ color: "green", fontSize: "2em" }} />
              )}
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              <div className="delivery-time">
                <AiOutlineClockCircle style={{ fontSize: "2em" }} />
                <p>Ships in {productDetails?.leadTime} days</p>
              </div>
              <div className="min-order-quantity">
                <FaBoxes style={{ fontSize: "2em" }} />
                <p>MOQ: {productDetails?.moq}</p>
              </div>
            </div>
            <div className="price">
              <FaRupeeSign
                style={{ color: "var(--theme-font-color)", fontSize: "3em" }}
              />{" "}
              <p>{productDetails?.price} / Unit</p>
            </div>
            <div className="hr"></div>
            <div className="more-details">
              {productDetails?.description && (
                <>
                  <p className="desc-heading">Description:</p>
                  <div className="description">
                    {productDetails?.description}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
