import React from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from 'react-router-dom';
function SlideBar() {
    return (
      
      <CDBSidebar textColor="#fff" backgroundColor="#101A33">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Quản lý
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin/control/card/view" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="far fa-credit-card">Quản lý thẻ</CDBSidebarMenuItem>

            </NavLink>
            
            <NavLink exact to="/admin/control/user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Quản lý tài khoản</CDBSidebarMenuItem>
            </NavLink>  
            <NavLink exact to="/admin/control/order" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Quản lý yêu cầu</CDBSidebarMenuItem>
              
            </NavLink>
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>

    )
      
        
}

export default SlideBar
