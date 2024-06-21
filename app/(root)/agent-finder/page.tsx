import AgentFilter from "@/components/shared/AgentFilter";
import AgentFilterMobile from "@/components/shared/AgentFilterMobile";
import CollectionAgents from "@/components/shared/CollectionAgents";
import NotSubscribed from "@/components/shared/NotSubscribed";
import SearchComponent from "@/components/shared/SearchComponent";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AgentFinderPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  // const user = await getUserById(userId);

  // const planBought = user?.planBought;
  return (
    <div className='w-full flex flex-col'>
      <h1 className="text-3xl font-bold">
        Agents That Trust Us
      </h1>
      <div className="flex flex-col mt-8">
        <div>
          <SearchComponent />
          <AgentFilterMobile />
        </div>
        <div className="w-full flex gap-4">
          <div className="hidden md:flex w-[30%]">
            <AgentFilter />
          </div>
          <CollectionAgents 
            data={["1", "2", "3", "4", "5"]}
            emptyTitle="No Properties Found"
            emptySubtitle="Come back later..."
            page={1}
            limit={8}
            collectionType="All_Agents"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentFinderPage;
