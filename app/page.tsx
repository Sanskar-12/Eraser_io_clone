"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useEffect } from "react";

const page = () => {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default page;
