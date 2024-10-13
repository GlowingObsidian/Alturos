"use client";

import { Flame, LibraryBig, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "My Forms", href: "/dashboard", icon: <LibraryBig /> },
  {
    name: "Responses",
    href: "/dashboard/responses",
    icon: <MessageSquareQuote />,
  },
  { name: "Subscription", href: "/dashboard/subscription", icon: <Flame /> },
];

function NavigationList({ action }: { action: () => void }) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="mt-5 px-5 space-y-3">
        {navLinks.map((navLink) => (
          <li
            key={navLink.name}
            className={`${
              pathname === navLink.href
                ? "bg-gray-100 rounded-md text-primary"
                : ""
            } p-3 hover:text-primary`}
          >
            <Link
              href={navLink.href}
              className="flex items-center gap-2 font-bold"
              onClick={action}
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
