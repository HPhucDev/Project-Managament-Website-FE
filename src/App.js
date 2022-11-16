/* eslint-disable no-return-assign */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import store from "./redux/store/index";
import "./static/css/style.css";
import config from "./config/config";
import ProtectedRoute from "./routes/protectedRoute";
import { authRoutes, userRoutes } from "./routes/allRouter";
import withAdminLayout from "./layout/withAdminLayout";
import withUnAuthLayout from "./layout/withUnAuthLayout";
import NotFound from "./container/pages/Other/404";

const { theme } = config;

const ProviderConfig = () => {
  const { rtl, topMenu, darkMode } = config;

  return (
    <ConfigProvider direction={rtl ? "rtl" : "ltr"}>
      <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
        <Router>
          <Switch>
            <Route path={"/page-not-found"} component={NotFound} />
            {authRoutes.map((authRouterItem, index) => (
              <Route
                key={index}
                path={authRouterItem.path}
                component={withUnAuthLayout(authRouterItem.component)}
              />
            ))}
            {userRoutes.map((userRouterItem, index) => (
              <ProtectedRoute
                key={index}
                path={userRouterItem.path}
                component={withAdminLayout(userRouterItem.component)}
              />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default hot(App);
