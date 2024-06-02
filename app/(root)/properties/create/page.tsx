import NotSubscribed from "@/components/shared/NotSubscribed";
import PropertyForm from "@/components/shared/PropertyForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const CreatePropertyPage = async () => {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");
    const user = await getUserById(userId);

  //   const planBought = user?.planBought;

  return (
    <>
      <section className="py-5 md:py-10">
        {/* {planBought === "no" && <NotSubscribed />} */}
        <h1 className="text-center h3-bold sm:text-left">Create Property</h1>
      </section>
      <div className="my-8 px-5 sm:p-0">
        <PropertyForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreatePropertyPage;
