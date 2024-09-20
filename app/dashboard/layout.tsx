import Logo from "@/app/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavigationList from "../(components)/NavigationList";
import Sidebar from "../(components)/Sidebar";
import Header from "../(components)/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[1fr] lg:grid-cols-[280px_1fr] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="grid grid-rows-[65px]">
        {/* Header */}
        <Header />

        {/* Main Area */}
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
}
