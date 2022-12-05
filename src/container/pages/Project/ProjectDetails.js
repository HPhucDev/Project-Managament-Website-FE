import React, { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Progress, Spin } from "antd";
import FeatherIcon from "feather-icons-react";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import propTypes from "prop-types";
import { ProjectDetailsWrapper, TaskLists } from "./style";
import FileListCard from "./overview/FileListCard";
import { PageHeader } from "../../../components/page-headers/page-headers";
import { Main } from "../../styled";
import Heading from "../../../components/heading/heading";
import { Cards } from "../../../components/cards/frame/cards-frame";
import { Button } from "../../../components/buttons/buttons";

const TaskList = lazy(() => import("./overview/TaskList"));
const Activities = lazy(() => import("./overview/Activities"));

const ProjectDetails = ({ match }) => {
  const dispatch = useDispatch();
  const project = [
    {
      id: 1,
      title: "Dashboard UI Project",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Design",
      rate: 5,
      popular: 1,
      percentage: 85,
    },
    {
      id: 2,
      title: "Custom Software",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 3,
      popular: 2,
      percentage: 38,
    },
    {
      id: 3,
      title: "Application UI Design",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 4,
      popular: 3,
      percentage: 46,
    },
    {
      id: 4,
      title: "Website Builder",
      status: "late",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 5,
      popular: 4,
      percentage: 29,
    },
    {
      id: 5,
      title: "Component Library",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 4,
      popular: 5,
      percentage: 96,
    },
    {
      id: 6,
      title: "Dashboard UI Project",
      status: "complete",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 3,
      popular: 6,
      percentage: 73,
    },
    {
      id: 7,
      title: "Custom Software",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 2,
      popular: 7,
      percentage: 42,
    },
    {
      id: 8,
      title: "Application UI Design",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 4,
      popular: 8,
      percentage: 36,
    },
    {
      id: 9,
      title: "Website Builder",
      status: "late",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 3,
      popular: 9,
      percentage: 82,
    },
    {
      id: 10,
      title: "Component Library",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 2,
      popular: 10,
      percentage: 63,
    },
    {
      id: 11,
      title: "Dashboard UI Project",
      status: "complete",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 1,
      popular: 11,
      percentage: 53,
    },
    {
      id: 12,
      title: "Dashboard UI Project",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Design",
      rate: 5,
      popular: 12,
      percentage: 33,
    },
  ];

  const { title, content } = project[0];

  return (
    <ProjectDetailsWrapper>
      <PageHeader
        ghost
        title={
          <div key="1" className="project-header">
            <Heading as="h2">{title}</Heading>
            {/* <Button type="primary" size="small">
              <FeatherIcon icon="plus" size="14" /> Add Task
            </Button>
            <Button
              className="btn-markComplete"
              outlined
              type="white"
              size="small"
            >
              <FeatherIcon icon="check" size="14" /> Mark as Complete
            </Button> */}
          </div>
        }
        buttons={[
          <div key="1" className="project-action">
            <Link key={1} to="#" className="project-edit">
              <FeatherIcon icon="edit-3" size={14} />
              Chỉnh sửa
            </Link>
            <Link key={2} to="#" className="project-remove">
              <FeatherIcon icon="trash-2" size={14} />
              Xóa
            </Link>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} xl={8} xs={24}>
            <div className="project-progress">
              <h3>Tiến độ</h3>
              <Progress percent={65} strokeWidth={5} status="active" />
            </div>
            <Cards headless>
              <div className="state-single">
                <div className="color-primary">
                  <Link to="#">
                    <FeatherIcon icon="list" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">47</Heading>
                  <p>Báo cáo tiến độ</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-secondary">
                  <Link to="#">
                    <FeatherIcon icon="pie-chart" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">34</Heading>
                  <p>Báo cáo tiến độ được hoàn thành</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-success">
                  <Link to="#">
                    <FeatherIcon icon="layout" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">$27,500</Heading>
                  <p>Spendings</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-warning">
                  <Link to="#">
                    <FeatherIcon icon="clock" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">250</Heading>
                  <p>Hours Spent</p>
                </div>
              </div>
            </Cards>
          </Col>
          <Col xxl={12} xl={16} xs={24}>
            <div className="about-project-wrapper">
              <Cards title="Thông tin đề tài">
                <div className="about-content">
                  <p>{content}</p>
                </div>
                <div className="about-project">
                  <div>
                    <span>Người tạo</span>
                    <p>Huỳnh Xuân Phụng</p>
                  </div>
                  <div>
                    <span>Thời gian</span>
                    <p>15 tuần</p>
                  </div>
                  <div>
                    <span>Ngày bắt đầu</span>
                    <p className="color-primary">28 Dec 2019</p>
                  </div>
                  <div>
                    <span>Ngày kết thúc</span>
                    <p className="color-danger">18 Mar 2020</p>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>
          <Col xxl={6} lg={9} xs={24}>
            <div className="project-users-wrapper">
              <Cards
                title="Thành viên"
                isbutton={
                  <Button
                    className="btn-addUser"
                    outlined
                    type="white"
                    size="small"
                  >
                    <FeatherIcon icon="user-plus" size={14} /> Thêm thành viên
                  </Button>
                }
              >
                <div className="project-users">
                  <div className="porject-user-single">
                    <div>
                      <img
                        src={require(`../../../static/img/users/1.png`)}
                        alt=""
                      />
                    </div>
                    <div>
                      <Heading as="h5">Meyri Carles</Heading>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img
                        src={require(`../../../static/img/users/3.png`)}
                        alt=""
                      />
                    </div>
                    <div>
                      <Heading as="h5">Tuhin Molla</Heading>
                      <p>Project Manager</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img
                        src={require(`../../../static/img/users/9.jpg`)}
                        alt=""
                      />
                    </div>
                    <div>
                      <Heading as="h5">Billal Hossain</Heading>
                      <p>App Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img
                        src={require(`../../../static/img/users/4.png`)}
                        alt=""
                      />
                    </div>
                    <div>
                      <Heading as="h5">Khalid Hasan</Heading>
                      <p>App Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img
                        src={require(`../../../static/img/users/5.png`)}
                        alt=""
                      />
                    </div>
                    <div>
                      <Heading as="h5">Meyri Carles</Heading>
                      <p>Ui Designer</p>
                    </div>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>
          <Col xxl={16} lg={15} xs={24}>
            <TaskLists>
              <Cards
                title={
                  <nav>
                    {/* <NavLink to={`${match.url}/tasklist`}>
                      Cập nhật tiến độ
                    </NavLink>
                    &nbsp; &nbsp; */}
                    <NavLink to={`${match.url}/activities`}>
                      Tiến độ thực hiện đề tài{" "}
                    </NavLink>
                  </nav>
                }
              >
                <Switch>
                  <Suspense
                    fallback={
                      <div className="spin">
                        <Spin />
                      </div>
                    }
                  >
                    <Route exact path={`${match.url}`} component={Activities} />
                    {/* <Route
                      path={`${match.url}/tasklist`}
                      component={TaskList}
                    /> */}
                    <Route
                      path={`${match.url}/activities`}
                      component={Activities}
                    />
                  </Suspense>
                </Switch>
              </Cards>
            </TaskLists>
          </Col>
          <Col xxl={8} xs={24}>
            <FileListCard />
          </Col>
        </Row>
      </Main>
    </ProjectDetailsWrapper>
  );
};

ProjectDetails.propTypes = {
  match: propTypes.object,
};

export default ProjectDetails;
