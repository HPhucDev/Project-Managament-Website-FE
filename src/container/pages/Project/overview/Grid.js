import React, { useState, useEffect, lazy, Suspense } from "react";
import { Row, Col, Pagination, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../../../components/heading/heading";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { ProjectPagination } from "../style";
import { addProjectCriteria } from "../../../../redux/slices/criteriaSearchSlice";

const GridCard = lazy(() => import("./GridCard"));

const Grid = () => {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projectStore.projects?.content);
  const totalElements = useSelector(
    (state) => state.projectStore.projects.totalElements
  );
  const pageSize = useSelector(
    (state) => state.criteriaSearchStore.projectCriteria.pageSize
  );
  const pageIndex = useSelector(
    (state) => state.criteriaSearchStore.projectCriteria.pageIndex
  );

  // useEffect(() => {
  //   if (project) {
  //     setState({
  //       projects: project,
  //     });
  //   }
  // }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    dispatch(
      addProjectCriteria({
        pageSize: pageSize,
      })
    );
  };

  const onHandleChange = (current, pageSize) => {
    dispatch(
      addProjectCriteria({
        pageIndex: current - 1,
      })
    );
  };

  return (
    <Row gutter={25}>
      {projects?.length ? (
        projects?.map((value) => {
          return (
            <Col key={value.id} xl={8} md={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <GridCard project={value} />
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
        <ProjectPagination>
          {projects?.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={pageSize}
              current={pageIndex + 1}
              total={totalElements}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
};

export default Grid;
