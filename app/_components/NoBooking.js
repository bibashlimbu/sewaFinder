import { Button } from "@/components/ui/button";
import Section from "./Section";
import Link from "next/link";

function NoBooking() {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src="https://ldalruqkubplvhztlaqx.supabase.co/storage/v1/object/sign/Error-image/noBooking.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFcnJvci1pbWFnZS9ub0Jvb2tpbmcuc3ZnIiwiaWF0IjoxNzM2MTYzMjQ5LCJleHAiOjI5OTc2MDMyNDl9.WEtWlzKUZfE7WJP5LfhzCmZkTV98Ys1wp75jQEqpDjY&t=2025-01-06T11%3A34%3A09.757Z"
          className="lg:w-4/12 md:w-6/12 w-10/12"
          alt="noBooking"
        />
        <h4 className="font-bold">!!! No Booking found !!!</h4>
        <Button asChild>
          <Link href="/services">Goto services</Link>
        </Button>
      </div>
    </Section>
  );
}

export default NoBooking;
