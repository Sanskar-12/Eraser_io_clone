import { ChevronDown, LogOut, Settings, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from "@/components/ui/separator";

const SideNavTopSection = () => {
  const menu = [
    {
      id: 1,
      name: "Create Team",
      path: "/teams/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger>
        {" "}
        <div className="flex items-center gap-3 hover:bg-slate-200 p-3 rounded-lg cursor-pointer">
          <Image src={"/logo.png"} alt="logo" height={40} width={40} />
          <h2 className="flex gap-2 items-center font-bold text-[17px]">
            Team Name
            <ChevronDown />
          </h2>
        </div>
      </PopoverTrigger>
      <PopoverContent className="ml-7 p-4">
        {/* Team Section */}
        <div>
          <h2>Team Name</h2>
        </div>
        <Separator className="mt-2 bg-slate-100" />
        {/* Option Section */}
        <div>
          {menu.map((item, index) => (
            <h2
              className="flex gap-2 items-center
            p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm"
              key={index}
            >
              <item.icon className=" h-4 w-4" />
              {item.name}
            </h2>
          ))}
          <LogoutLink>
            <h2
              className="flex gap-2 items-center
            p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm"
            >
              <LogOut className=" h-4 w-4" />
              Logout
            </h2>
          </LogoutLink>
        </div>
        <Separator className="mt-2 bg-slate-100" />
        {/* User Info Section */}
      </PopoverContent>
    </Popover>
  );
};

export default SideNavTopSection;
