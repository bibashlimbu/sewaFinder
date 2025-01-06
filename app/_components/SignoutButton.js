import { Button } from "@/components/ui/button";
import { signoutAction } from "../_lib/action";
import { LogOut } from "lucide-react";

function SignoutButton() {
  return (
    <form action={signoutAction}>
      <Button variant="outline" className="p-5">
        <LogOut />
        Logout
      </Button>
    </form>
  );
}

export default SignoutButton;
