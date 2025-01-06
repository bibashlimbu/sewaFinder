import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { AlignRight, CircleUserRound, User } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Search from "./Search";
import { auth } from "../_lib/auth";
import AccountButton from "./AccountButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function Navigation() {
  const session = await auth();
  return (
    <nav className="items-center flex gap-3">
      <Search className={"sm:hidden md:block hidden"} />
      {session?.user?.image ? (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={session.user.image} />
            <AvatarFallback>
              <CircleUserRound />
            </AvatarFallback>
          </Avatar>
          <AccountButton />
        </div>
      ) : (
        <Button asChild className="sm:hidden md:block hidden">
          <Link href="/login">Login</Link>
        </Button>
      )}
      <ModeToggle className="sm:hidden md:block hidden" />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="p-3 md:hidden">
            <AlignRight />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2">
            <Search className={"mb-4"} />
            <Button asChild className="w-full">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/services">Services</Link>
            </Button>
            {session?.user ? (
              <Button asChild className="w-full">
                <Link href="/account">Account</Link>
              </Button>
            ) : (
              <Button asChild className="w-full">
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Navigation;
