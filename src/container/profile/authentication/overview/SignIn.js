import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { AuthWrapper } from './style';
import { login } from '../../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import Heading from '../../../../components/heading/heading';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const handleSubmit = () => {
    dispatch(login());
    localStorage.setItem(
      'token-crm',
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYmR6L1RENHdTQm1VL0JWbVNnYS9BPT0iLCJ1c2VybmFtZSI6Im9PYklCOHJQeFpUcGtMNm9WR3JqL3RmR2ExT3phbk5zSFhIUklXVUVXblZtV0x2R0Fza1drdW53WDJEWXpvdFQiLCJkZXZpY2VLZXkiOiJqMkt3ZVphQ2F6UUxNZ0F4ZUw4Q2J3PT0iLCJ3b3Jrc3BhY2UiOiJJNzZhMmp1Y1N0RTVVc0x3R3ozcVNBPT0iLCJpYXQiOjE2NjU4MDk5OTMsImp0aSI6Ijg5ODdmNTcyLTA3NGUtNDE2MS1hZmIwLTljMDQyMDYxOTRhMyIsImV4cCI6MTY2Nzk2OTk5M30.eeIzuNpu5TZSGFNYVg4o_PNc9vua_6NmjRIfSIXH7kebxgphI6R_V3sG7i8K6Xs9yAI806UNMM5_H29uWWlqzQ',
    );
    localStorage.setItem(
      'refreshToken-crm',
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYmR6L1RENHdTQm1VL0JWbVNnYS9BPT0iLCJ1c2VybmFtZSI6Im9PYklCOHJQeFpUcGtMNm9WR3JqL3RmR2ExT3phbk5zSFhIUklXVUVXblZtV0x2R0Fza1drdW53WDJEWXpvdFQiLCJkZXZpY2VLZXkiOiJqMkt3ZVphQ2F6UUxNZ0F4ZUw4Q2J3PT0iLCJ3b3Jrc3BhY2UiOiJJNzZhMmp1Y1N0RTVVc0x3R3ozcVNBPT0iLCJpYXQiOjE2NjU4MDk5OTMsImp0aSI6ImEwMzBjOWZhLWM1ODUtNGY4OC1iZTJlLTRjOWJiMTcwYWU5NCIsImV4cCI6MTY2ODQwMTk5M30.IRJVopywGYcnLCS_11xtAjTWx6rHli3hU_yGd5ZgZxuAX5B2IK-58oFXNCN3JijiVm7NbzZnyoAn_Vsdf0AMZQ',
    );
    localStorage.setItem('expiry-remember-me-crm', 1668401992816);
    history.push('/');
  };

  const onChange = checked => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      <p className="auth-notice">
        Don&rsquo;t have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign in to <span className="color-secondary">Admin</span>
          </Heading>
          <Form.Item
            name="username"
            rules={[{ message: 'Please input your username or Email!', required: true }]}
            initialValue="name@example.com"
            label="Username or Email Address"
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" initialValue="123456" label="Password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
            <NavLink className="forgot-pass-link" to="/forgotPassword">
              Forgot password?
            </NavLink>
          </div>
          <Form.Item>
            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
          <p className="form-divider">
            <span>Or</span>
          </p>
          <ul className="social-login">
            <li>
              <Link className="google-signup" to="#">
                <img src={require('../../../../static/img/google.png')} alt="" />
                <span>Sign in with Google</span>
              </Link>
            </li>
            <li>
              <Link className="facebook-sign" to="#">
                <FacebookOutlined />
              </Link>
            </li>
            <li>
              <Link className="twitter-sign" to="#">
                <TwitterOutlined />
              </Link>
            </li>
          </ul>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
