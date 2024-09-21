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

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" aria-describedby={undefined}>
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
          <NavigationList />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
