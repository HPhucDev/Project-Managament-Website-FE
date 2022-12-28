import React, { lazy, useState, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spin, Select, Tag } from "antd";
import { Switch, NavLink, Route, Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import propTypes from "prop-types";
import CreateProject from "./overview/CreateProject";
import { ProjectHeader, ProjectSorting } from "./style";
import { AutoComplete } from "../../../components/autoComplete/autoComplete";
import { Button } from "../../../components/buttons/buttons";

import { Main } from "../../styled";
import { PageHeader } from "../../../components/page-headers/page-headers";
import usePageLoader from "../../../hooks/usePageLoader";
import { searchProjects } from "../../../redux/slices/projectSlice";
import { addProjectCriteria } from "../../../redux/slices/criteriaSearchSlice";

const Grid = lazy(() => import("./overview/Grid"));
const List = lazy(() => import("./overview/List"));

const Project = ({ match }) => {
  const { path } = match;
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = usePageLoader();
  const listProjectCriteria = useSelector(
    (state) => state.criteriaSearchStore.projectCriteria
  );
  const projects = useSelector((state) => state.projectStore.projects);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    loadData();
  }, [listProjectCriteria]);

  const loadData = async () => {
    showLoader();
    dispatch(
      searchProjects({
        lectureId: listProjectCriteria.lectureId,
        major: listProjectCriteria.major,
        pageSize: listProjectCriteria.pageSize,
        pageIndex: listProjectCriteria.pageIndex,
        order: listProjectCriteria.order,
        searchKey: listProjectCriteria.searchKey,
        sort: listProjectCriteria.sort,
        subjectStatus: listProjectCriteria.subjectStatus,
      })
    );

    hideLoader();
  };

  const onHandleChangeStatus = (status) => {
    dispatch(
      addProjectCriteria({
        subjectStatus: status,
      })
    );
  };

  const onSorting = (sort) => {
    dispatch(
      addProjectCriteria({
        sort: sort,
      })
    );
  };

  return (
    <>
      <ProjectHeader>
        <PageHeader
          ghost
          title="Danh sách đề tài"
          subTitle={<>{projects?.totalElements} đề tài</>}
          buttons={[
            <Button
              key="1"
              type="primary"
              size="default"
              onClick={() => setShowModal(true)}
            >
              <FeatherIcon icon="plus" size={16} /> Thêm đề tài
            </Button>,
          ]}
        />
      </ProjectHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <ProjectSorting>
              <div className="project-sort-bar">
                <div className="project-sort-nav">
                  <nav>
                    <ul>
                      <li
                        className={
                          listProjectCriteria.subjectStatus === "NULL"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          to="#"
                          style={{ marginRight: "10px" }}
                          onClick={() => onHandleChangeStatus("NULL")}
                        >
                          Tất cả
                        </Link>
                      </li>
                      <li
                        className={
                          listProjectCriteria.subjectStatus === "PENDING"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          to="#"
                          style={{ marginRight: "10px" }}
                          onClick={() => onHandleChangeStatus("PENDING")}
                        >
                          Đang thực hiện
                        </Link>
                      </li>
                      <li
                        className={
                          listProjectCriteria.subjectStatus === "NEED_CHECKED"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          to="#"
                          style={{ marginRight: "10px" }}
                          onClick={() => onHandleChangeStatus("NEED_CHECKED")}
                        >
                          Chờ phê duyệt
                        </Link>
                      </li>
                      <li
                        className={
                          listProjectCriteria.subjectStatus === "REJECT"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          to="#"
                          style={{ marginRight: "10px" }}
                          onClick={() => onHandleChangeStatus("REJECT")}
                        >
                          Phê duyệt thất bại
                        </Link>
                      </li>
                      <li
                        className={
                          listProjectCriteria.subjectStatus === "UNASSIGNED"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          to="#"
                          style={{ marginRight: "10px" }}
                          onClick={() => onHandleChangeStatus("UNASSIGNED")}
                        >
                          Chưa có sinh viên đăng kí
                        </Link>
                      </li>
                      <li
                        className={
                          listProjectCriteria.subjectStatus === "ASSIGNED"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          to="#"
                          style={{ marginRight: "10px" }}
                          onClick={() => onHandleChangeStatus("ASSIGNED")}
                        >
                          Đã có sinh viên đăng kí
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="project-sort-search">
                  {/* <AutoComplete
                    onSearch={handleSearch}
                    dataSource={notData}
                    placeholder="Tìm kiếm đề tài"
                    patterns
                  /> */}
                </div>
                <div className="project-sort-group">
                  <div className="sort-group">
                    <span>Sắp xếp:</span>
                    <Select onChange={onSorting} defaultValue="START_DATE">
                      {/* <Select.Option value="name" >Tên đề tài</Select.Option> */}
                      <Select.Option value="START_DATE">Ngày tạo</Select.Option>
                    </Select>
                    <div className="layout-style">
                      {loader}
                      <NavLink to={`${path}/grid`}>
                        <FeatherIcon icon="grid" size={16} />
                      </NavLink>
                      <NavLink to={`${path}/list`}>
                        <FeatherIcon icon="list" size={16} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectSorting>
            <div>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route path={path} component={Grid} exact />
                  <Route path={`${path}/grid`} component={Grid} />
                  <Route path={`${path}/list`} component={List} />
                </Suspense>
              </Switch>
            </div>
          </Col>
        </Row>
        <CreateProject
          onCancel={() => setShowModal(false)}
          visible={showModal}
        />
      </Main>
    </>
  );
};

Project.propTypes = {
  match: propTypes.object,
};

export default Project;
