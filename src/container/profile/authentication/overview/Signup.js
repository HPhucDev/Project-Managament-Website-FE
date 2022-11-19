import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Input, Button } from "antd";
import { AuthWrapper } from "./style";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import Heading from "../../../../components/heading/heading";

const SignUp = () => {
  const [state, setState] = useState({
    values: null,
    checked: null,
  });
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      <p className="auth-notice">
        Bạn đã có tài khoản? <NavLink to={"/login"}>Đăng nhập ngay nào</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="register" onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">Đăng kí tài khoản</Heading>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên của bạn!" }]}
          >
            <Input placeholder="Tên " />
          </Form.Item>
          <Form.Item
            name="username"
            label="Tên của bạn"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản !" }]}
          >
            <Input placeholder="Tài khoản" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email của bạn"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="name@example.com" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu của bạn"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange}>
              Đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư của
              chúng tôi
            </Checkbox>
          </div>
          <Form.Item>
            <Button
              className="btn-create"
              htmlType="submit"
              type="primary"
              size="large"
            >
              Tạo tài khoản
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
