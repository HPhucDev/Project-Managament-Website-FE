import React, { lazy, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Spin, Select } from "antd";
import { Switch, NavLink, Route, Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import propTypes from "prop-types";
import { NotificationHeader, NotificationSorting } from "./style";
import { Button } from "../../../components/buttons/buttons";
import { Main } from "../../styled";
import { PageHeader } from "../../../components/page-headers/page-headers";
import * as pathName from "../../../constants/pathName";

const Grid = lazy(() => import("./overview/Grid"));
const List = lazy(() => import("./overview/List"));

const Notification = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);
  const [state, setState] = useState({
    notData: searchData,
    visible: false,
    categoryActive: "all",
  });

  const { notData, visible } = state;
  const handleSearch = (searchText) => {
    const data = searchData.filter((item) =>
      item.title.toUpperCase().startsWith(searchText.toUpperCase())
    );
    setState({
      ...state,
      notData: data,
    });
  };

  const onSorting = (selectedItems) => {
    // dispatch(sortingProjectByCategory(selectedItems));
  };

  const onChangeCategory = (value) => {
    setState({
      ...state,
      categoryActive: value,
    });
    // dispatch(filterProjectByStatus(value));
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  return (
    <>
      <NotificationHeader>
        <PageHeader
          ghost
          title="Danh sách đề tài"
          subTitle={<>24 đề tài</>}
          buttons={[
            <Button onClick={showModal} key="1" type="primary" size="default">
              <FeatherIcon icon="plus" size={16} /> Thêm đề tài
            </Button>,
          ]}
        />
      </NotificationHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <NotificationSorting>
              <div className="project-sort-bar">
                <div className="project-sort-nav">
                  <nav>
                    <ul>
                      <li
                        className={
                          state.categoryActive === "all"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link onClick={() => onChangeCategory("all")} to="#">
                          Tất cả
                        </Link>
                      </li>
                      <li
                        className={
                          state.categoryActive === "progress"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          onClick={() => onChangeCategory("progress")}
                          to="#"
                        >
                          Đang thực hiện
                        </Link>
                      </li>
                      <li
                        className={
                          state.categoryActive === "complete"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link
                          onClick={() => onChangeCategory("complete")}
                          to="#"
                        >
                          Hoàn thành
                        </Link>
                      </li>
                      <li
                        className={
                          state.categoryActive === "late"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link onClick={() => onChangeCategory("late")} to="#">
                          Trễ
                        </Link>
                      </li>
                      <li
                        className={
                          state.categoryActive === "early"
                            ? "active"
                            : "deactivate"
                        }
                      >
                        <Link onClick={() => onChangeCategory("early")} to="#">
                          Sớm
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="project-sort-group">
                  <div className="sort-group">
                    <span>Sắp xếp:</span>
                    <Select onChange={onSorting} defaultValue="name">
                      <Select.Option value="name">Tên đề tài</Select.Option>
                      <Select.Option value="createDate">Ngày tạo</Select.Option>
                    </Select>
                    <div className="layout-style">
                      <NavLink to={`${pathName.PageNotFound}/grid`}>
                        <FeatherIcon icon="grid" size={16} />
                      </NavLink>
                      <NavLink to={`${pathName.PageNotFound}/list`}>
                        <FeatherIcon icon="list" size={16} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </NotificationSorting>
            <div>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route path={pathName.PageNotFound} component={Grid} exact />
                  <Route
                    path={`${pathName.PageNotFound}/grid`}
                    component={Grid}
                  />
                  <Route
                    path={`${pathName.PageNotFound}/list`}
                    component={List}
                  />
                </Suspense>
              </Switch>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
};

Notification.propTypes = {
  match: propTypes.object,
};

export default Notification;
