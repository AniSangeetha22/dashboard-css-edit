import React from "react";
import { TopNavBar } from "./TopNavBar";
import { LeftSideMenuBar } from "./LeftSideMenuBar";
import { RightSideContentBar } from "./RightSideContentBar";
import "./layout.css"

export const Layout = () => {
  return (
    <div className="layout">
      <div className="top-nav-bar">
        <TopNavBar />
      </div>
      <div className="left-right-content">
        <LeftSideMenuBar />
        <RightSideContentBar />
      </div>
    </div>
  );
};
