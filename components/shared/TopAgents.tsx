import Link from "next/link"
import { Button } from "../ui/button"
import CollectionAgents from "./CollectionAgents"

const TopAgents = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center text-primary font-semibold uppercase tracking-widest text-sm">
        Our Family
      </h1>
      <h1 className="text-black font-extrabold text-2xl text-center mt-2">
        Meet Our Top Performing Agents
      </h1>

      <CollectionAgents
        data={["1", "2", "3"]}
        emptyTitle={"No Agents Found"}
        emptySubtitle={"Come back later"}
        limit={6}
        page={1}
        totalPages={1}
        collectionType={"Top_Agents"}
      />

      <div className="w-full flex justify-center mt-8">
        <Link href={'/agent-finder'}>
          <Button className="">
            View All Agents
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default TopAgents