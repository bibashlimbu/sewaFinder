import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        quality={100}
        priority
        height="70"
        width="70"
        alt="sewaFinder logo"
      />
      {/* sewaFinder */}{" "}
    </Link>
  );
}

export default Logo;
