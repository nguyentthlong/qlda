import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={`app`} style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#0d6efd">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Quản lý đồ án
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/sinhvien" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Sinh viên</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/giangvien" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Giảng viên</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/detai" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="list">Danh sách đề tài</CDBSidebarMenuItem>
                        </NavLink>
                        {/* <NavLink exact to="/tables" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Hướng dẫn</CDBSidebarMenuItem>
                        </NavLink> */}
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">profile</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/upload" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="upload">Quản lý đồ án</CDBSidebarMenuItem>
                        </NavLink>
                        {/* <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                        </NavLink> */}
                    </CDBSidebarMenu>
                    <CDBSidebarMenu></CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
