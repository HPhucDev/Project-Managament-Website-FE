/* eslint-disable no-return-assign */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { Suspense, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import store from './redux/store';
import AuthLayout from './container/profile/authentication/Index';
import './static/css/style.css';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';
import { authRoutes, userRoutes } from './routes/allRouter';
import withAdminLayout from './layout/withAdminLayout';

const { theme } = config;

const ProviderConfig = () => {
  const { rtl, topMenu, darkMode } = useSelector(state => {
    return {
      darkMode: state.ChangeLayoutMode.data,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    return () => (unmounted = true);
  }, [setPath]);

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
        <Suspense
          fallback={
            <div className="spin">
              <Spin />
            </div>
          }
        >
          <Router>
            <Switch>
              {authRoutes.map((authRouterItem, index) => (
                <Route key={index} path={authRouterItem.path} component={AuthLayout(authRouterItem.component)} />
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
        </Suspense>
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
