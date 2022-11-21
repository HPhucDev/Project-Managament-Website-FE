import React from "react";
import { Row, Col, Input, Form } from "antd";
import FeatherIcon from "feather-icons-react";
import Countdown from "react-countdown";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { ComingsoonStyleWrapper } from "../style";
import { PageHeader } from "../../../components/page-headers/page-headers";
import { Main } from "../../styled";
import { Cards } from "../../../components/cards/frame/cards-frame";
import { Button } from "../../../components/buttons/buttons";
import { ShareButtonPageHeader } from "../../../components/buttons/share-button/share-button";
import { ExportButtonPageHeader } from "../../../components/buttons/export-button/export-button";
import { CalendarButtonPageHeader } from "../../../components/buttons/calendar-button/calendar-button";

const ComingSoon = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    }
    return (
      <div className="countdwon-data">
        <span>
          <span className="countdown-time">{days}</span>{" "}
          <span className="countdown-title">Days</span>
        </span>
        <span>
          <div className="countdown-time">{hours}</div>
          <span className="countdown-title">Hours</span>
        </span>
        <span>
          <div className="countdown-time">{minutes}</div>
          <span className="countdown-title">Minutes</span>
        </span>
        <span>
          <div className="countdown-time">{seconds}</div>{" "}
          <span className="countdown-title">Seconds</span>
        </span>
      </div>
    );
  };

  renderer.propTypes = {
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    completed: PropTypes.node,
  };

  return (
    <>
      <PageHeader
        title="Coming Soon"
        buttons={[
          <div key="1" className="page-header-actions">
            {/* <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button> */}
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <ComingsoonStyleWrapper>
              <Cards headless>
                <div className="strikingDash-logo">
                  <img
                    style={{ width: "120px" }}
                    src={require("../../../static/img/logo.png")}
                    alt=""
                  />
                </div>
                <div className="coming-soon-content">
                  <h1>We are coming soon</h1>
                </div>
                <div className="strikingDash-countdown">
                  <Countdown
                    date={Date.now() + 1606546460}
                    renderer={renderer}
                  />
                </div>

                <div className="coming-soon-social">
                  <p>2022 © HCMUTE</p>
                </div>
              </Cards>
            </ComingsoonStyleWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ComingSoon;
