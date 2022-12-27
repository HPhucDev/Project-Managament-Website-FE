import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { NavLink, useRouteMatch } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import propTypes from "prop-types";
import * as myRouter from "../constants/pathName";

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const [menuSelected, setMenuSelected] = useState([pathName]);

  useEffect(() => {
    if (pathName.search("project") != -1) {
      setMenuSelected([...menuSelected, "project"]);
    } else {
      if (pathName.search("student") != -1) {
        setMenuSelected([...menuSelected, "student"]);
      } else {
        if (pathName.search("lecturer") != -1) {
          setMenuSelected([...menuSelected, "lecturer"]);
        } else {
          if (pathName.search("help") != -1) {
            setMenuSelected([...menuSelected, "help"]);
          } else {
            setMenuSelected([...menuSelected]);
          }
        }
      }
    }
  }, []);
  console.log(menuSelected);
  return (
    <Menu
      // onOpenChange={onOpenChange}
      // onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? "inline" : "horizontal"}
      theme={darkMode && "dark"}
      // // eslint-disable-next-line no-nested-ternary
      selectedKeys={menuSelected}
      // defaultOpenKeys={!topMenu ? [`${mainPathSplit?.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      // openKeys={openKeys}
    >
      <Menu.Item
        key={`${myRouter.DashBoard}`}
        icon={!topMenu && <FeatherIcon icon="home" />}
      >
        <NavLink onClick={toggleCollapsed} to={`${myRouter.DashBoard}`}>
          Trang chủ
        </NavLink>
      </Menu.Item>
      <SubMenu
        key={"project"}
        icon={!topMenu && <FeatherIcon icon="target" />}
        title="Đề tài"
      >
        <Menu.Item key={`${myRouter.Project}/grid`} icon>
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}/grid`}>
            Danh sách đề tài
          </NavLink>
        </Menu.Item>
        <Menu.Item key={`${myRouter.Project}/detail/1`}>
          <NavLink
            onClick={toggleCollapsed}
            to={`${myRouter.Project}/detail/1`}
          >
            Đề tài của tôi
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key={"lecturer"}
        icon={!topMenu && <FeatherIcon icon="users" />}
        title="Giảng viên"
      >
        <Menu.Item key={`${myRouter.Lecturer}`}>
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Lecturer}`}>
            Danh sách giảng viên
          </NavLink>
        </Menu.Item>
        <Menu.Item key={`${myRouter.Lecturer_Group}`}>
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Lecturer_Group}`}>
            Hội đồng phản biện
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key={"student"}
        icon={!topMenu && <FeatherIcon icon="users" />}
        title="Sinh viên"
      >
        <Menu.Item key={`${myRouter.Student}`}>
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Student}`}>
            Danh sách sinh viên
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        key={`help`}
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
