"use client";
import { Button } from "@/components/ui/button";
import Section from "./_components/Section";
import Link from "next/link";

function NotFound({}) {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src="https://ldalruqkubplvhztlaqx.supabase.co/storage/v1/object/sign/Error-image/somethingWentWrong.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFcnJvci1pbWFnZS9zb21ldGhpbmdXZW50V3Jvbmcuc3ZnIiwiaWF0IjoxNzM1NjE4MTk2LCJleHAiOjIyMDg2NTgxOTZ9.60PZPivFhS4iDAAeubxR11_dXqGY4enT5VxQGYDFRi8&t=2024-12-31T04%3A09%3A56.468Z"
          className="w-1/2 object-cover"
          alt="somethingWentWrong"
        />
        <h4 className="font-bold">!!! Page Not Found!!!</h4>
        <Button asChild>
          <Link href="/">Goto Home</Link>
        </Button>
      </div>
    </Section>
  );
}

export default NotFound;
