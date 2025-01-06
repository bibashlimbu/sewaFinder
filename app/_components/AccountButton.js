import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User } from "lucide-react";
import Link from "next/link";

function AccountButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="outline"
            size="icon"
            className="sm:hidden md:block hidden p-2"
            asChild
          >
            <Link href="/account">
              <User />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Account</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default AccountButton;
