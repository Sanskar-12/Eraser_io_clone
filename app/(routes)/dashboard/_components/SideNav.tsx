"use client";
import React, { useState } from "react";
import SideNavTopSection, { TeamList } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const SideNav = () => {
  const { user } = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);

  const [activeTeam, setActiveTeam] = useState<TeamList>();

  const onFileCreate = (fileInput: string) => {
    createFile({
      fileInput,
      teamId: activeTeam?._id!,
      createdBy: user?.email!,
    })
      .then((resp) => {
        toast("File Created Successfully!");
      })
      .catch((e) => {
        toast("Error while creating file");
      });
  };

  return (
    <div className=" h-screen fixed w-72 border-r border-[1px] p-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection user={user} setActiveTeamInfo={setActiveTeam} />
      </div>
      <div>
        <SideNavBottomSection onFileCreate={onFileCreate} />
      </div>
    </div>
  );
};

export default SideNav;
