import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Portallayout() {
  return (
    <div className="sb-nav-fixed">
      <Topbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portallayout;