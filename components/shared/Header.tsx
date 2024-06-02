import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {

  return (
    <header className="flex justify-between p-6 px-10 shadow-sm fixed top-0 z-10 max-w-7xl lg:mx-auto w-full">
      <div className="flex gap-10 items-center">
        <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
        <NavItems />
      </div>
      <div className="flex gap-2 items-center">
        <Button asChild className="hidden md:flex gap-2 text-black">
          <Link href={"/properties/create"}>
            <Plus className="w-5 h-5" color="black" />
            Post Your Property
          </Link>
        </Button>
        {/* Signout */}
        <SignedOut>
          <Button asChild variant={"outline"}>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
