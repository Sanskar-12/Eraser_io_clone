"use client";

import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import { FilesListContext } from "@/app/_context/FilesListContext";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const convex = useConvex();
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const [filesList, setFileList] = useState();

  useEffect(() => {
    if (user) {
      checkTeam();
    }
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email!,
    });

    if (!result.length) {
      router.push("/teams/create");
    }
  };

  return (
    <div>
      <FilesListContext.Provider value={{ filesList, setFileList }}>
        <div className="grid grid-cols-4">
          <div className="h-screen w-72 fixed">
            <SideNav />
          </div>
          <div className="col-span-4 ml-72"> {children}</div>
        </div>
      </FilesListContext.Provider>
    </div>
  );
};

export default DashboardLayout;
