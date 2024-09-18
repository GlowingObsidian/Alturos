import Image from "next/image";
import Logo from "@/app/public/logo.png";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Image
        src={Logo}
        alt="alteros logo"
        className="h-[80px] w-[160px] object-contain"
      />
      {children}
    </>
  );
}
