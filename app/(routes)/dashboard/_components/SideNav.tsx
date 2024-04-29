import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import SideNavTopSection from "./SideNavTopSection";

const SideNav = () => {
  return (
    <div className="bg-gray-100 h-screen fixed w-72 border-r p-6">
      <SideNavTopSection />
    </div>
  );
};

export default SideNav;
