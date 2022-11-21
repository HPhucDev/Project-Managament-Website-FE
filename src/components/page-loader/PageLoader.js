import React from "react";
import Spinner from "../../static/img/loading-23.gif";

const PageLoader = () => {
  return (
    <div className="loader">
      <img
        src={Spinner}
        className="sp-loader"
        style={{
          width: "20%",
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "99999999",
        }}
        alt="loading"
      />
    </div>
  );
};

export default PageLoader;
