import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSelectedCategory,
  fetchCategoryProducts,
} from "../../store/slice/categoryProductsSlice";
import Product from "../../components/product/Product";
import "./categoryProducts.scss";
import NavigationBar from "../../components/navigationBar/NavigationBar";

const CategoryProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    isLoading,
    data: categoryProducts,
    isError,
    totalItems,
    totalPages,
    page,
    selectedCategory,
  } = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    if (!selectedCategory) {
      dispatch(fetchCategoryProducts({ id: id, page: page > 1 ? page : 1 }));
      dispatch(changeSelectedCategory({ selectedCategory: id }));
    }
  }, [page]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="category-products">
      <h1>
        Explore <span style={{ color: "var(--theme-color)" }}>Pro</span>ducts
      </h1>
      <div className="products-page">
        <div className="all-products">
          {categoryProducts?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.productName}
              image={product.productImages[0]}
              // price={product.variants[0]?.price}
            />
          ))}
        </div>
        <NavigationBar
          totalPages={totalPages}
          currentPage={page}
          categoryId={id}
        />
      </div>
    </div>
  );
};

export default CategoryProducts;
