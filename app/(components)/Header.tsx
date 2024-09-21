import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";

function Header() {
  return (
    <header className="backdrop-blur-sm border-b p-4 sticky top-0 z-10 flex justify-between lg:justify-end">
      <MobileSidebar />
      <UserButton />
    </header>
  );
}

export default Header;
