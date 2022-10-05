import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Layout = (props) => {
  return (
    <div className="App">
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div
            id="content-wrapper"
            className="d-flex flex-column"
            style={{ position: "relative" }}
          >
            <TopBar {...props} />
            <div id="content">{props.children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Layout);
