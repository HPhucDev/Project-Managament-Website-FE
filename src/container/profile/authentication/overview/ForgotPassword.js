import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Input, Button } from "antd";
import { AuthWrapper } from "./style";
import Heading from "../../../../components/heading/heading";

const ForgotPassword = () => {
  const [state, setState] = useState({
    values: null,
  });
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  return (
    <AuthWrapper>
      <div className="auth-contents">
        <Form name="forgotPass" onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">Quên mật khẩu?</Heading>
          <p className="forgot-text">
            Nhập địa chỉ email bạn đã sử dụng khi tham gia và chúng tôi sẽ gửi
            cho bạn hướng dẫn để đặt lại mật khẩu của bạn.
          </p>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email của bạn!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="name@example.com" />
          </Form.Item>
          <Form.Item>
            <Button
              className="btn-reset"
              htmlType="submit"
              type="primary"
              size="large"
            >
              Gửi mã xác nhận
            </Button>
          </Form.Item>
          <p className="return-text">
            Trở về trang <NavLink to="/login">Đăng nhập</NavLink>
          </p>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
