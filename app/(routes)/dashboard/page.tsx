"use client";

import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { useEffect } from "react";
import Header from "./_components/Header";
import FilesList from "./_components/FilesList";

const Dashboard = () => {
  const { user } = useKindeBrowserClient();
  const convex = useConvex();

  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, {
      email: user?.email!,
    });

    if (!result?.length) {
      createUser({
        email: user?.email!,
        name: user?.given_name!,
      }).then((resp) => {
        console.log(resp);
      });
    }
  };

  return (
    <div className="p-8">
      <Header />
      <FilesList />
    </div>
  );
};

export default Dashboard;
