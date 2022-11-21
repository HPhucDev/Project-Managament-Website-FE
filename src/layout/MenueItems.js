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
      <Menu.Item key="addUser" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${myRouter.DashBoard}`}>
          Trang chủ
        </NavLink>
      </Menu.Item>
      <SubMenu
        key="subject"
        icon={!topMenu && <FeatherIcon icon="target" />}
        title="Đề tài"
      >
        <Menu.Item key="subjectList" icon>
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
            Danh sách đề tài
          </NavLink>
        </Menu.Item>
        <Menu.Item key="mySubject">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}/1`}>
            Đề tài của tôi
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="teacher"
        icon={!topMenu && <FeatherIcon icon="users" />}
        title="Giảng viên"
      >
        <Menu.Item key="teachers">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Lecturer}`}>
            Danh sách giảng viên
          </NavLink>
        </Menu.Item>
        <Menu.Item key="teacherGroup">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Lecturer_Group}`}>
            Hội đồng phản biện
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="student"
        icon={!topMenu && <FeatherIcon icon="users" />}
        title="Sinh viên"
      >
        <Menu.Item key="students">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Student}`}>
            Danh sách sinh viên
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        key="help"
        icon={!topMenu && <FeatherIcon icon="help-circle" />}
      >
        <NavLink onClick={toggleCollapsed} to={`${myRouter.Help}`}>
          Trợ giúp
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
