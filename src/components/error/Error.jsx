import "./error.scss";
import { TbFaceIdError } from "react-icons/tb";

const Error = () => {
  return (
    <div className="error">
      <h1>
        <TbFaceIdError style={{ position: "relative", top: 5 }} /> Uh Oh!
        Something went wrong!
      </h1>
      <p>Please reload the page to retry.</p>
    </div>
  );
};

export default Error;
