import Logo from "@/app/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavigationList from "../(components)/NavigationList";

function Sidebar() {
  return (
    <aside className="hidden border-r p-4 sticky top-0 h-screen lg:block">
      <Link href="/" className="flex justify-center">
        <Image
          src={Logo}
          alt="Company Logo"
          width={200}
          priority
          className="h-auto"
        />
      </Link>
      <NavigationList />
    </aside>
  );
}

export default Sidebar;
