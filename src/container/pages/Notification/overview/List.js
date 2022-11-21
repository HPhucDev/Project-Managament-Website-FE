import React, { useState, useEffect } from "react";
import { Row, Col, Table, Progress, Pagination, Tag } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Heading from "../../../../components/heading/heading";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import {
  NotificationPagination,
  NotificationListTitle,
  NotificationListAssignees,
  NotificationList,
} from "../style";
import { Dropdown } from "../../../../components/dropdown/dropdown";

const NotificationLists = () => {
  const project = useSelector((state) => state.projects.data);
  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  useEffect(() => {
    if (project) {
      setState({
        projects: project,
      });
    }
  }, [project]);

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
          <NotificationListTitle>
            <Heading as="h4">
              <Link to={`/hcmute/project/projectDetails/${id}`}>{title}</Link>
            </Heading>

            <p>{category}</p>
          </NotificationListTitle>
        ),
        startDate: <span className="date-started">26 Dec 2019</span>,
        deadline: <span className="date-finished">18 Mar 2020</span>,
        assigned: (
          <NotificationListAssignees>
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
          </NotificationListAssignees>
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
          <NotificationList>
            <div className="table-responsive">
              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
            </div>
          </NotificationList>
        </Cards>
      </Col>
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

export default NotificationLists;
