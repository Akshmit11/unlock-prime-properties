'use client'

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Plus } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {

  const pathname = usePathname(); 

  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white lg:hidden">
          <Image src={"/logo.svg"} alt="logo" width={128} height={38} />
          <Separator className="border border-gray-50" />
          <ul className="space-y-4">
            {headerLinks.map((link) => {
                const isActive =
                (pathname === "/" && link.route === "/") ||
                pathname === link.route ||
                pathname?.startsWith(`${link.route}/`);
              return (
                <li
                  key={link.route}
                  className={`${isActive && "text-primary"}`}
                >
                  <Link
                    href={link.route}
                    className="hover:underline hover:underline-offset-2 font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Separator className="border border-gray-50" />
          <div className="md:hidden w-fit">
            <Button asChild className="flex md:hidden gap-2 text-white">
              <Link href={"/property/create"}>
                <Plus className="w-5 h-5" color="white" />
                Post Your Property
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
