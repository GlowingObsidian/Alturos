"use client";

import Logo from "@/app/public/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import NavigationList from "./NavigationList";
import { useState } from "react";

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        aria-describedby={undefined}
        onInteractOutside={() => setIsOpen(false)}
      >
        <SheetHeader>
          <SheetTitle asChild>
            <Link href="/" className="flex justify-center">
              <Image
                src={Logo}
                alt="Company Logo"
                width={200}
                priority
                className="h-auto"
              />
            </Link>
          </SheetTitle>
          <NavigationList action={() => setIsOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
