import React, { Suspense } from "react";
import { Row, Col, Spin } from "antd";
import {
  Aside,
  Content,
} from "../container/profile/authentication/overview/style";
import Heading from "../components/heading/heading";

const withUnAuthLayout = (WraperContent) => {
  return () => {
    return (
      <Row>
        <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
          <Aside>
            <div className="auth-side-content">
              <img
                src={require("../static/img/auth/topShape.png")}
                alt=""
                className="topShape"
              />
              <img
                src={require("../static/img/auth/bottomShape.png")}
                alt=""
                className="bottomShape"
              />
              <Content>
                <br />
                <br />
                <Heading as="h1">
                  Chào bạn đã đến <br />
                </Heading>
                <img
                  style={{ width: "380px" }}
                  src={require("../static/img/logo.png")}
                  alt=""
                />
              </Content>
            </div>
          </Aside>
        </Col>

        <Col xxl={16} xl={15} lg={12} md={16} xs={24}>
          <Suspense
            fallback={
              <div className="spin">
                <Spin />
              </div>
            }
          >
            <WraperContent />
          </Suspense>
        </Col>
      </Row>
    );
  };
};

export default withUnAuthLayout;
