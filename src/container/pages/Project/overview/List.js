import React from "react";
import { Row, Col, Table, Progress, Pagination, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Heading from "../../../../components/heading/heading";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import {
  ProjectPagination,
  ProjectListTitle,
  ProjectListAssignees,
  ProjectList,
} from "../style";
import { Dropdown } from "../../../../components/dropdown/dropdown";
import { addProjectCriteria } from "../../../../redux/slices/criteriaSearchSlice";
import { formatDateDDMMYYYY } from "../../../../utility/dateUtils";

const ProjectLists = () => {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projectStore.projects?.content);
  console.log(projects);
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

  const handleCheckStatus = (status) => {
    const allStatus = {
      "0": (
        <Tag icon={<CloseCircleOutlined />} color="error">
          Phê duyệt thất bại
        </Tag>
      ),
      "1": (
        <Tag icon={<ClockCircleOutlined />} color="warning">
          Chờ phê duyệt
        </Tag>
      ),
      "2": (
        <Tag icon={<SyncOutlined spin />} color="processing">
          Đang thực hiện
        </Tag>
      ),
      "3": (
        <Tag icon={<ClockCircleOutlined />} color="default">
          Chưa có sinh viên đăng kí
        </Tag>
      ),
      "4": (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Đã có sinh viên đăng kí
        </Tag>
      ),
    };
    return allStatus[status];
  };

  const dataSource = [];

  if (projects?.length)
    projects.map((project) => {
      return dataSource.push({
        key: project?.id,
        project: (
          <ProjectListTitle>
            <Heading as="h4">
              <Link to={`project/detail/${project?.id}`}>{project?.name}</Link>
            </Heading>
          </ProjectListTitle>
        ),
        startDate: (
          <span className="date-started">
            {formatDateDDMMYYYY(project?.startDate)}
          </span>
        ),
        deadline: (
          <span className="date-finished">
            {formatDateDDMMYYYY(project?.endDate)}
          </span>
        ),
        assigned: (
          <ProjectListAssignees>
            <ul>
              <li>
                {project?.groupLeader?.imgLink && (
                  <img src={project?.groupLeader?.imgLink} alt="" />
                )}
              </li>
              {project?.groupMember &&
                project?.groupMember.map((item) => {
                  return (
                    <li style={{ display: "grid", justifyContent: "center" }}>
                      <img src={item?.imgLink} alt="" />
                    </li>
                  );
                })}
            </ul>
          </ProjectListAssignees>
        ),
        status: handleCheckStatus(project?.status),
        // completion: (
        //   <div className="project-list-progress">
        //     <Progress
        //       percent={status === "complete" ? 100 : percentage}
        //       strokeWidth={5}
        //       className="progress-primary"
        //     />
        //     <p>12/15 Task Completed</p>
        //   </div>
        // ),
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to={`project/detail/${project?.id}`}>
                  Xem thông tin chi tiết
                </Link>
                <Link to="#">Xóa đề tài</Link>
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

export default ProjectLists;
