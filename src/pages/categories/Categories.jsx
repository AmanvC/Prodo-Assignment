import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./categories.scss";
import Category from "../../components/category/Category";
import { fetchCategories } from "../../store/slice/categorySlice";
import { selectedCategory } from "../../store/slice/categoryProductsSlice";

const Categories = () => {
  // const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  const {
    isLoading,
    data: categories,
    isError,
  } = useSelector((state) => state.category);

  useEffect(() => {
    if (!categories) {
      dispatch(fetchCategories());
    }
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="categories">
      <h1>
        Choose from a wide{" "}
        <span style={{ color: "var(--theme-color)" }}>range</span> of{" "}
        <span style={{ color: "var(--theme-font-color)" }}>categories:</span>
      </h1>
      <div className="category-items">
        {categories?.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            image={category.categoryImages[0]}
            name={category.categoryName}
            desc={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
