import React from "react";
import { Menu } from "antd";
import { NavLink, useRouteMatch } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import propTypes from "prop-types";
import * as myRouter from "../constants/pathName";

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;

  const pathArray = pathName?.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath?.split("/");

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu
      ? [`${mainPathSplit?.length > 2 ? mainPathSplit[1] : "dashboard"}`]
      : []
  );

  const onOpenChange = (keys) => {
    setOpenKeys(
      keys[keys?.length - 1] !== "recharts"
        ? [keys?.length && keys[keys?.length - 1]]
        : keys
    );
  };

  const onClick = (item) => {
    if (item?.keyPath?.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? "inline" : "horizontal"}
      theme={darkMode && "dark"}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={!topMenu ? ["home"] : []}
      // defaultOpenKeys={!topMenu ? [`${mainPathSplit?.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <SubMenu
        key="guide"
        icon={!topMenu && <FeatherIcon icon="help-circle" />}
        title="Hướng dẫn"
      >
        <Menu.Item key="notifications">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
            Thông báo
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tutorial">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}/1`}>
            Pro Tutorial
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="news" icon={!topMenu && <FeatherIcon icon="tv" />}>
        <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
          Tin tức cập nhật
        </NavLink>
      </Menu.Item>
      <Menu.Item key="reuPage" icon={!topMenu && <FeatherIcon icon="repeat" />}>
        <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
          Reup Page
        </NavLink>
      </Menu.Item>
      <Menu.Item
        key="reupWorkpress"
        icon={!topMenu && <FeatherIcon icon="refresh-cw" />}
      >
        <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
          Reup Workpress
        </NavLink>
      </Menu.Item>
      <Menu.Item key="scan" icon={!topMenu && <FeatherIcon icon="file-text" />}>
        <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
          Quét bài viết
        </NavLink>
      </Menu.Item>
      <SubMenu
        key="friend"
        icon={!topMenu && <FeatherIcon icon="users" />}
        title="Bạn bè"
      >
        <Menu.Item key="sentMessage">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Student}`}>
            Gửi tin nhắn
          </NavLink>
        </Menu.Item>
        <Menu.Item key="addUser">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
            Kết bạn
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={!topMenu && <FeatherIcon icon="phone" />}
        key="phoneNumber"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/support`}>
          Phone & UUID
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="link" />} key="link">
        <NavLink onClick={toggleCollapsed} to={`${path}/support`}>
          Liên kết
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={!topMenu && <FeatherIcon icon="settings" />}
        key="settings"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/support`}>
          Quản lí tài khoản
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
