import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import * as myRouter from '../constants/pathName';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;

  const pathArray = pathName?.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath?.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit?.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys?.length - 1] !== 'recharts' ? [keys?.length && keys[keys?.length - 1]] : keys);
  };

  const onClick = item => {
    if (item?.keyPath?.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={!topMenu ? ['home'] : []}
      // defaultOpenKeys={!topMenu ? [`${mainPathSplit?.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <Menu.Item
        key="home"
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${myRouter.Dashboard}`}>
              <FeatherIcon icon="home" />
            </NavLink>
          )
        }
      >
        <NavLink onClick={toggleCollapsed} to={`${myRouter.Dashboard}`}>
          Trang chủ
        </NavLink>
      </Menu.Item>
      <SubMenu key="project" icon={!topMenu && <FeatherIcon icon="target" />} title="Đề tài">
        <Menu.Item key="views">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
            Danh sách đề tài
          </NavLink>
        </Menu.Item>
        <Menu.Item key="projectDetails">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}/1`}>
            Đề tài của tôi
          </NavLink>
        </Menu.Item>
        <Menu.Item key="viewsMyProject">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Project}`}>
            Danh sách đề tài của tôi
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/* <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/app/calendar/month`}>
              <FeatherIcon icon="calendar" />
            </NavLink>
          )
        }
        key="calendar"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/app/calendar/month`}>
          Calendar
        </NavLink>
      </Menu.Item> */}
      {/* <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/app/to-do`}>
              <FeatherIcon icon="check-square" />
            </NavLink>
          )
        }
        key="to-do"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/app/to-do`}>
          To Do
        </NavLink>
      </Menu.Item> */}
      <SubMenu key="student" icon={!topMenu && <FeatherIcon icon="users" />} title="Sinh viên">
        <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Student}`}>
            Danh sách sinh viên
          </NavLink>
        </Menu.Item>
        <Menu.Item key="addUser">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
            Thêm sinh viên
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="teacher" icon={!topMenu && <FeatherIcon icon="users" />} title="Giảng viên">
        <Menu.Item key="list">
          <NavLink onClick={toggleCollapsed} to={`${myRouter.Lecturer}`}>
            Danh sách giảng viên
          </NavLink>
        </Menu.Item>
        <Menu.Item key="addNew">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
            Thêm giảng viên
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/* <Menu.Item icon={!topMenu && <FeatherIcon icon="file" />} key="fileManager">
        <NavLink onClick={toggleCollapsed} to={`${path}/fileManager`}>
          File Manager
          <span className="badge badge-success">New</span>
        </NavLink>
      </Menu.Item> */}
      <Menu.Item icon={!topMenu && <FeatherIcon icon="help-circle" />} key="support">
        <NavLink onClick={toggleCollapsed} to={`${path}/support`}>
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
