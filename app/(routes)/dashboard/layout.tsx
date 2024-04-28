"use client";

import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const convex = useConvex();
  const router = useRouter();
  const { user } = useKindeBrowserClient();

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

  return <div>{children}</div>;
};

export default DashboardLayout;
