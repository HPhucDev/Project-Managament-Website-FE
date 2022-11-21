import React, { useState, lazy, Suspense } from "react";
import { Row, Col, Pagination, Skeleton } from "antd";
import Heading from "../../../../components/heading/heading";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { NotificationPagination } from "../style";

const GridCard = lazy(() => import("./GridCard"));

const Grid = () => {
  const [state, setState] = useState({
    projects: [],
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <Row gutter={25}>
      {projects.length ? (
        projects.map((value) => {
          return (
            <Col key={value.id} xl={8} md={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <GridCard value={value} />
              </Suspense>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <Cards headless>
            <Heading>Không có dữ liệu!</Heading>
          </Cards>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        <NotificationPagination>
          {projects.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </NotificationPagination>
      </Col>
    </Row>
  );
};

export default Grid;
