"use client";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const menuList = [
  {
    id: Math.random(),
    name: "Upload",
    icon: Upload,
    path: "/upload",
  },
  {
    id: Math.random(),
    name: "Files",
    icon: File,
    path: "/files",
  },
  {
    id: Math.random(),
    name: "Upgrade",
    icon: Shield,
    path: "/upgrade",
  },
];

const SideNav = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <Image src={"/logo.svg"} width={150} height={100} />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((listItem, idx) => (
          <button
            onClick={() => setActiveIdx(idx)}
            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500${
              activeIdx === idx ? "bg-blue-50 text-primary" : null
            }`}
          >
            <listItem.icon />
            <h2>{listItem.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
