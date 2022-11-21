import React, { useState, useEffect } from "react";
import { Row, Col, Table, Progress, Pagination, Tag } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Heading from "../../../../components/heading/heading";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import {
  ProjectPagination,
  ProjectListTitle,
  ProjectListAssignees,
  ProjectList,
} from "../style";
import { Dropdown } from "../../../../components/dropdown/dropdown";

const ProjectLists = () => {
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

  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  // useEffect(() => {
  //   if (project) {
  //     setState({
  //       projects: project,
  //     });
  //   }
  // }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  const dataSource = [];

  if (projects.length)
    projects.map((value) => {
      const { id, title, status, category, percentage } = value;
      return dataSource.push({
        key: id,
        project: (
          <ProjectListTitle>
            <Heading as="h4">
              <Link to={`/hcmute/project/projectDetails/${id}`}>{title}</Link>
            </Heading>

            <p>{category}</p>
          </ProjectListTitle>
        ),
        startDate: <span className="date-started">26 Dec 2019</span>,
        deadline: <span className="date-finished">18 Mar 2020</span>,
        assigned: (
          <ProjectListAssignees>
            <ul>
              <li>
                <img
                  src={require(`../../../../static/img/users/1.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require(`../../../../static/img/users/2.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require(`../../../../static/img/users/3.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require(`../../../../static/img/users/4.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require(`../../../../static/img/users/5.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require(`../../../../static/img/users/6.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require(`../../../../static/img/users/7.png`)}
                  alt=""
                />
              </li>
            </ul>
          </ProjectListAssignees>
        ),
        status: <Tag className={status}>{status}</Tag>,
        completion: (
          <div className="project-list-progress">
            <Progress
              percent={status === "complete" ? 100 : percentage}
              strokeWidth={5}
              className="progress-primary"
            />
            <p>12/15 Task Completed</p>
          </div>
        ),
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to="#">View</Link>
                <Link to="#">Edit</Link>
                <Link to="#">Delete</Link>
              </>
            }
          >
            <Link to="#">
              <FeatherIcon icon="more-horizontal" size={18} />
            </Link>
          </Dropdown>
        ),
      });
    });

  const columns = [
    {
      title: "Tên đề tài",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "deadline",
      key: "deadline",
    },
    {
      title: "Nhóm thực hiện",
      dataIndex: "assigned",
      key: "assigned",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Tiến độ hoàn thành",
      dataIndex: "completion",
      key: "completion",
    },

    {
      title: "",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <Row gutter={25}>
      <Col xs={24}>
        <Cards headless>
          <ProjectList>
            <div className="table-responsive">
              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
            </div>
          </ProjectList>
        </Cards>
      </Col>
      <Col xs={24} className="pb-30">
        <ProjectPagination>
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
        </ProjectPagination>
      </Col>
    </Row>
  );
};

export default ProjectLists;
