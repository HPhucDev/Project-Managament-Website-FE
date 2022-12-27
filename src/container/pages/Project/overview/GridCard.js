import React from "react";
import { Progress, Tag } from "antd";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Dropdown } from "../../../../components/dropdown/dropdown";
import { textRefactor } from "../../../../components/utilities/utilities";
import { ProjectCard } from "../style";
import { formatDateDDMMYYYY } from "../../../../utility/dateUtils";

const GridCard = ({ project }) => {
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

  return (
    <ProjectCard>
      <Cards headless>
        <div className="project-top">
          <div className="project-title">
            <h1>
              <Link to={`project/detail/${project?.id}`}> {project?.name}</Link>
              {handleCheckStatus(project.status)}
            </h1>

            <Dropdown
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
          </div>
          <p className="project-desc">
            {textRefactor(project?.description, 13)}
          </p>
          <div className="project-timing">
            <div>
              <span>Ngày bắt đầu</span>
              <strong>{formatDateDDMMYYYY(project?.startDate)}</strong>
            </div>
            <div>
              <span>Ngày kết thúc</span>
              <strong>{formatDateDDMMYYYY(project?.endDate)}</strong>
            </div>
          </div>
          {/* <div className="project-progress">
            <Progress
              percent={status === "complete" ? 100 : percentage}
              strokeWidth={5}
              status="primary"
              className="progress-primary"
            />
            <p>12/15 Task Completed</p>
          </div> */}
        </div>
        <div className="project-bottom">
          <div className="project-assignees">
            <p>Người thực hiện</p>
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
          </div>
        </div>
      </Cards>
    </ProjectCard>
  );
};

GridCard.propTypes = {
  value: PropTypes.object,
};

export default GridCard;
