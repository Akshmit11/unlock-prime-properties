import AgentCard from "./AgentCard";

type CollectionAgentProps = {
  data: string[];
  emptyTitle: string;
  emptySubtitle: string;
  limit?: number;
  page?: number | string;
  totalPages?: number;
  urlParamName?: string;
  currentUserId?: string;
  collectionType: "All_Agents";
};

const CollectionAgents = ({
  data,
  emptyTitle,
  emptySubtitle,
  limit,
  page,
  totalPages = 0,
  urlParamName,
  currentUserId,
  collectionType,
}: CollectionAgentProps) => {
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {data.map((agent, i) => {
              return (
                <div key={i}>
                  <AgentCard
                    agent={"123"}
                    collectionType={collectionType}
                    currentUserId={currentUserId}
                  />
                </div>
              );
            })}
          </div>
          {/* {totalPages > 1 && (
              <Pagination
                urlParamName={urlParamName}
                page={page}
                totalPages={totalPages}
              />
            )} */}
        </>
      ) : (
        <div className="flex items-center justify-center max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full min-h-[200px] flex-col gap-3 rounded-[14px] bg-gray-200 py-28 text-center">
          <h3 className="font-bold text-[20px] leading-[30px] tracking-[2%] md:text-[28px] md:leading-[36px]">
            {emptyTitle}
          </h3>
          <p className="text-[14px] font-normal leading-[20px]">
            {emptySubtitle}
          </p>
        </div>
      )}
    </>
  );
};

export default CollectionAgents;
