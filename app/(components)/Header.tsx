"use client";

import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  console.log(user?.id);

  return (
    <header className="backdrop-blur-sm border-b p-4 sticky top-0 z-10 flex justify-end">
      <UserButton />
    </header>
  );
}

export default Header;
