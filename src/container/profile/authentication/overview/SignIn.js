import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthWrapper } from "./style";
import Heading from "../../../../components/heading/heading";
import usePageLoader from "../../../../hooks/usePageLoader";
import { authenticationService } from "../../../../config/api/authenticationApi";

const SignIn = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [loader, showLoader, hideLoader] = usePageLoader();
  const [errorLogin, setErrorLogin] = useState(false);

  const setDataLocal = (value) => {
    const A_MONTH_TO_MILISECONDS = 2592000000;
    const A_12_HOURS_TO_MILISECONDS = 43200000;

    localStorage.setItem("token-crm", value.accessToken);
    localStorage.setItem("refreshToken-crm", value.refreshToken);
    localStorage.setItem("user-crm", JSON.stringify(value.user));
    if (isChecked) {
      localStorage.setItem(
        "expiry-remember-me-crm",
        new Date().getTime() + A_MONTH_TO_MILISECONDS
      );
    } else {
      localStorage.setItem(
        "expiry-remember-me-crm",
        new Date().getTime() + A_12_HOURS_TO_MILISECONDS
      );
    }
  };

  const handleSubmit = async (data) => {
    try {
      showLoader();
      const response = await authenticationService.signInApi({
        username: data.username,
        password: data.password,
      });
      setDataLocal(response.data.data);
      hideLoader();
      history.push("/");
    } catch (error) {
      hideLoader();
      if (!error.response) {
        setErrorLogin("Không có kết nối đến server!");
      } else if (
        error?.response?.status === 401 &&
        error?.response.message ===
          "EMPLOYEE_NOT_FOUND_OR_PASSWORD_IS_NOT_MATCH"
      ) {
        setErrorLogin("Tài khoản hoặc mật khẩu không đúng!");
      }
    }
  };

  return (
    <AuthWrapper>
      {loader}
      {/* <p className="auth-notice">
        Bạn đã có tài khoản? <NavLink to="/register">Đăng kí ngay</NavLink>
      </p> */}
      <div className="auth-contents">
        <Form
          name="login"
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Heading as="h3">Đăng nhập</Heading>
          <Form.Item
            name="username"
            rules={[
              {
                message: "Vui lòng nhập tài khoản hoặc Email!",
                required: true,
              },
            ]}
            placeholder="name@example.com"
            label="Tài khoản hoặc email của bạn"
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" placeholder="123456" label="Mật khẩu">
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={(e) => setIsChecked(e.target.checked)}>
              Ghi nhớ đăng nhập
            </Checkbox>
            <NavLink className="forgot-pass-link" to="/forgotPassword">
              Quên mật khẩu?
            </NavLink>
          </div>
          <Form.Item>
            <Button
              className="btn-signin"
              htmlType="submit"
              type="primary"
              size="large"
            >
              {"Đăng nhập"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
