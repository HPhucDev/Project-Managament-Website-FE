import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { InfoWraper, UserDropDown } from "./auth-info-style";
import { Popover } from "../../popup/popup";
import Heading from "../../heading/heading";

const AuthInfo = () => {
  const SignOut = (e) => {
    e.preventDefault();
    // dispatch(logOut());
  };

  const userContent = (
    <UserDropDown>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img
            src={require("../../../static/img/avatar/chat-auth.png")}
            alt=""
          />
          <figcaption>
            <Heading as="h5">HPhuc Dev</Heading>
            <p> Developer</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <FeatherIcon icon="user" /> Profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="settings" /> Thay đổi mật khẩu
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <FeatherIcon icon="log-out" /> Đăng suất
        </Link>
      </div>
    </UserDropDown>
  );

  return (
    <InfoWraper>
      {/* <Message />
      <Notification /> */}
      {/* 
      <Settings />
      <Support />
      <div className="nav-author">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          <Link to="#" className="head-example">
            <img src={require(`../../../static/img/flag/${flag}.png`)} alt="" />
          </Link>
        </Dropdown>
      </div> */}

      <div className="nav-author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="head-example">
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
};

export default AuthInfo;
