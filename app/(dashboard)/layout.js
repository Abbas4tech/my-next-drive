import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

const layout = ({ children }) => {
  return (
    <>
      <div className="md:w-64 hidden md:flex h-full flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <TopHeader />
        {children}
      </div>
    </>
  );
};

export default layout;
