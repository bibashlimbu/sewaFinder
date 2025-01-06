import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Separator } from "@/components/ui/separator";

function Header() {
  return (
    <>
      <header className="container mx-auto py-3 flex justify-between">
        <Logo />

        <Navigation />
      </header>
      <Separator />
    </>
  );
}

export default Header;
