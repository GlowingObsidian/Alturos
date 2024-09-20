"use client";

import { LibraryBig, MessageSquareQuote, ChartLine, Cog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "My Forms", href: "/dashboard", icon: <LibraryBig /> },
  {
    name: "Responses",
    href: "/dashboard/responses",
    icon: <MessageSquareQuote />,
  },
  { name: "Analytics", href: "/dashboard/analytics", icon: <ChartLine /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Cog /> },
];

function NavigationList() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="mt-5 px-5 space-y-3">
        {navLinks.map((navLink) => (
          <li
            key={navLink.name}
            className={`${
              pathname === navLink.href ? "bg-gray-100 rounded-md" : ""
            } p-3 hover:text-primary`}
          >
            <Link
              href={navLink.href}
              className="flex items-center gap-2 font-bold"
            >
              {navLink.icon}
              <p>{navLink.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationList;
