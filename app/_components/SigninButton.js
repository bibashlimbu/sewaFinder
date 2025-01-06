import { Button } from "@/components/ui/button";
import { signinAction } from "../_lib/action";
function SigninButton() {
  return (
    <form action={signinAction}>
      <Button variant="outline" className="p-5">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        Continue with Google
      </Button>
    </form>
  );
}

export default SigninButton;
