import { Link } from "react-router-dom";

import "./header.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { imageBaseUrl } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <ContentWrapper>
        <div className="left-header">
          <Link to={"https://prodo.in/"}>
            <img
              className="brand"
              src={`${imageBaseUrl}/assets/img/PRODO_logo.png`}
            />
          </Link>
        </div>
        <div className="right-header">
          <Link to={"/categories"}>
            <button>Categories</button>
          </Link>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
