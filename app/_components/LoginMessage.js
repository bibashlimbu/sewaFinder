import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

function LoginMessage() {
  return (
    <Card className="lg:w-1/3 w-full flex items-center justify-center">
      <CardHeader>
        <p className="text-sm md:text-base lg:text-lg">
          Please{" "}
          <Link href="/login" className="text-primary underline">
            Login
          </Link>{" "}
          to book Service
        </p>
      </CardHeader>
    </Card>
  );
}

export default LoginMessage;
