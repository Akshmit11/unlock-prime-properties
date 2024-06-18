import Plan from "@/components/shared/Plan";
import React from "react";

const SubscribePage = () => {
  return (
    <>
      <section className="py-5 md:py-10">
        <h1 className="text-center h3-bold sm:text-left">Pricing</h1>
      </section>
      <section>
        <div className="flex flex-col md:flex-row gap-4 items-center mx-10 sm:mx-0">
          <Plan target="Agent" />
          <Plan target="Builder" />
        </div>
      </section>
      
    </>
  );
};

export default SubscribePage;
