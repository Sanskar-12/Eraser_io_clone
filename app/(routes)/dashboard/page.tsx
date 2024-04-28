"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useMutation, useQuery } from "convex/react";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useKindeBrowserClient();

  const getUser = useQuery(api.user.getUser, { email: user?.email! });

  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      if (getUser === undefined) {
        createUser({
          email: user.email!,
          name: user.given_name!,
        }).then((resp) => {
          console.log(resp);
        });
      }
    }
  }, [user]);

  return (
    <div>
      Dashboard
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  );
};

export default Dashboard;
