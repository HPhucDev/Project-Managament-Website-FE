import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layouts";
import NonAuthLayout from "./layouts/NonAuthLayout";
import { authRoutes, userRoutes } from "./routers";
import Authmiddleware from "./routers/middleware";

const App = () => {
  const NonAuthmiddleware = ({ component: Component, layout: Layout }) => (
    <Route
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );

  const checkNetwork = () => {
    window.addEventListener("offline", (e) => {
      toast.error(
        "Không có kết nối mạng",
        "Vui lòng kiểm tra lại kết nối mạng của bạn"
      );
    });

    window.addEventListener("online", (e) => {
      toast.success("Đã có kết nối mạng!");
    });
  };

  return (
    <React.Fragment>
      {checkNetwork()}
      <Toaster
        reverseOrder={false}
        position="bottom-right"
        containerStyle={{ zIndex: 999999 }}
      />
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <NonAuthmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              title={route.title}
            />
          ))}
          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              title={route.title}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
