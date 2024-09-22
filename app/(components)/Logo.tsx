import LogoImage from "@/app/public/logo.png";
import Image from "next/image";
import Link from "next/link";

function Logo({ width }: { width?: number }) {
  return (
    <Link href="/" className="flex justify-center">
      <Image
        src={LogoImage}
        alt="Company Logo"
        width={width ? width : 200}
        priority
        className="h-auto"
      />
    </Link>
  );
}

export default Logo;
