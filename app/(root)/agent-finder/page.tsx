import NotSubscribed from "@/components/shared/NotSubscribed";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AgentFinderPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);

  const planBought = user?.planBought;
  return (
    <div>
      {planBought === "no" && <NotSubscribed />}
      <div>PostPropertyPage</div>
    </div>
  );
};

export default AgentFinderPage;
