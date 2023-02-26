

import React, { useState, useEffect } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import logo from '../../assets/logo1.png'

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import OpenModal from '../component/OpenModal';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to='/'>Home</Link>, '1', <PieChartOutlined />,),
  getItem(<Link to='create'>New Resume</Link>, '2', <DesktopOutlined />),
  getItem(<Link to='templatecreate'>create Template</Link>, '3', <UserOutlined />),
  getItem('Vip Plan', '4', <TeamOutlined />),
  getItem(<Link to="files"> Resume Files</Link>, '5', <FileOutlined />),
];


const HomeLayout: React.FC = () => {
  const useNavi = useNavigate();

  useEffect(() => {
    const data: any = {};
    data.user = localStorage.getItem('user');
    data.token = localStorage.getItem('token')
    if (data.user) {
      <Outlet />
    } else useNavi('/')
  }, [])
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  interface LogOutInterFace {
    titleName: String,
    message: String
  }
  const LogOut: LogOutInterFace = {
    titleName: "Logout",
    message: "Are you sure ? shall we Logoout you !"
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 100, margin: 16, overflow: 'hidden' }} className="flexing-row" >
          <img src={logo} alt={logo} className="" />
        </div>
        <Menu theme="dark" className='' defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} className="flex flex-row items-center w-full">
          <div className=' flex flex-row items-center justify-between px-8 w-full'>
            <h1 className=' text-3xl font-semibold'>Resume Bulider.io</h1>
            <OpenModal titleName="Logout" message="Are you sure ? shall we Logoutyou !" />
            {/* <button className='button-normal2 w-20 h-10 flexing-row bg-darkblue text-white'>Logout</button> */}
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className=' h-full' style={{ padding: 0, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright ©2023 Created by sakthi@vishgyana.com</Footer>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;