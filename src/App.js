import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Categories from "./pages/categories/Categories";
import CategoryProducts from "./pages/categoryProducts/CategoryProducts";
import ProductDetails from "./pages/productDetails/ProductDetails";
import PageNotFound from "./pages/404/PageNotFound";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";

function App() {
  const Layout = ({ children }) => {
    return (
      <div className="layout">
        <Header />
        <ContentWrapper>
          <div className="children">{children}</div>
        </ContentWrapper>
      </div>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        />
        <Route
          path="/categories/:id"
          element={
            <Layout>
              <CategoryProducts />
            </Layout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
