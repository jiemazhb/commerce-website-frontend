import React from "react";
import { Navbar } from ".";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import UnderConstruction from "./UnderConstruction";

function MainLayout() {
  return (
    <>
      {/* <Navbar /> */}

      <UnderConstruction />
      <div className="container-md">
        <div className="row">
          <Outlet /> {/* 这个 Outlet 将渲染匹配的子路由组件 */}
        </div>
        <hr></hr>
        {/* footer */}
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
