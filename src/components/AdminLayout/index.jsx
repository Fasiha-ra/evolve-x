import React from "react";
import Header from "../Header/index";
import { MainLayoutSection } from "./adminLayout.styles";
import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar";
const AdminLayout = () => {
  return (
    <MainLayoutSection>
      <div className="mainHeader">
        <Header />
      </div>
      <div className="mainSidebarContent">
        <div className="mainSidebar">
            <SideBar/>
        </div>
        <div className="mainContent">
            <Outlet />
        </div>
      </div>
    </MainLayoutSection>
  );
};

export default AdminLayout;
