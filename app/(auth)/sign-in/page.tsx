import { Card } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import SignInView from "@/modules/auth/ui/views/sign-in-view";
import { headers } from "next/headers";
import React from "react";
import { redirect } from "next/navigation";
type Props = {};

const Page = async (props: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    return redirect("/");
  }
  
  return <SignInView />;
};

export default Page;
