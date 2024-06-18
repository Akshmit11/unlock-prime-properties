import { Mail, Phone } from "lucide-react";
import Image from "next/image";

type AgentCardProps = {
    agent: string;
    collectionType: string;
    currentUserId?: string;
}

const AgentCard = ({
    agent,
    collectionType,
    currentUserId,
}: AgentCardProps) => {
  return (
    <div className="flex flex-col items-center">
        <Image 
            src={'/assets/agent-img.webp'}
            alt="agent image"
            width={300}
            height={300}
            className="object-contain rounded-md"
        />

        <div className="flex mt-2 items-center justify-between mx-auto w-4/5">
            <div>
                <h1 className="text-lg font-medium">John Doe</h1>
                <h1 className="text-sm font-light">Sales: 123</h1>
            </div>
            <div className="flex gap-2">
                <Phone className="w-8 h-8 border rounded-full p-2" />
                <Mail className="w-8 h-8 border rounded-full p-2" />
            </div>
        </div>
    </div>
  )
}

export default AgentCard