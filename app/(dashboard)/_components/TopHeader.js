import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopHeader = () => {
  return (
    <div className="flex border-b p-5 items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <Image alt="logo" src={"/logo.svg"} className="md:hidden" width={150} height={100} />
      <UserButton />
    </div>
  );
};

export default TopHeader;
