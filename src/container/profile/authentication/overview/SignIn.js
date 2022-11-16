import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthWrapper } from "./style";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import Heading from "../../../../components/heading/heading";

const SignIn = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const handleSubmit = () => {
    localStorage.setItem(
      "token-crm",
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxTGN0NXN3VGFYSS9iV3V0SFdHSkZ3PT0iLCJ1c2VybmFtZSI6InkxMVc1NEdyU3cxU2pVWjBRNG95b0lRV1Fhc09qdzVHdjBwaVRtQkZKNlk9IiwiZGV2aWNlS2V5IjoiajJLd2VaYUNhelFMTWdBeGVMOENidz09Iiwid29ya3NwYWNlIjoiSTc2YTJqdWNTdEU1VXNMd0d6M3FTQT09IiwiaWF0IjoxNjY4NjEwMTA3LCJqdGkiOiJjMzcwZWZlZS0yNzM0LTQwNTctOWU4MS01ZDU5ZWE4YzVmZWMiLCJleHAiOjE2NzA3NzAxMDd9.gxbBAQSF09SOGXkW-tmKAE3W-7kjIOUccPHGgaDOioAXYxu9J7IvkCRIkPkh9qQbpbv8cpRVszK4HACeigGeSw"
    );
    localStorage.setItem(
      "refreshToken-crm",
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxTGN0NXN3VGFYSS9iV3V0SFdHSkZ3PT0iLCJ1c2VybmFtZSI6InkxMVc1NEdyU3cxU2pVWjBRNG95b0lRV1Fhc09qdzVHdjBwaVRtQkZKNlk9IiwiZGV2aWNlS2V5IjoiajJLd2VaYUNhelFMTWdBeGVMOENidz09Iiwid29ya3NwYWNlIjoiSTc2YTJqdWNTdEU1VXNMd0d6M3FTQT09IiwiaWF0IjoxNjY4NjEwMTA3LCJqdGkiOiI1MWZlMGM4ZC1iYTRkLTQ5ZmYtOGRlNy1kMGJmZDhhMzk5YjciLCJleHAiOjE2NzEyMDIxMDd9.zFFa-x6ods--GBlbJ0o5vyUZeYVeQiKjzCBvZuT3fRyLlYsCX1Qw46hW99uZ3vEMDC_6HiRYIePOUDO636eB6g"
    );
    localStorage.setItem("expiry-remember-me-crm", 1668653305950);
    history.push("/");
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      <p className="auth-notice">
        Bạn đã có tài khoản? <NavLink to="/register">Đăng kí ngay</NavLink>
      </p>
      <div className="auth-contents">
        <Form
          name="login"
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Heading as="h3">
            Đăng nhập vào <span className="color-secondary">Sky News</span>
          </Heading>
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
            <Checkbox onChange={onChange}>Ghi nhớ đăng nhập</Checkbox>
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
