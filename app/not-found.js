"use client";
import { Button } from "@/components/ui/button";
import Section from "./_components/Section";
import Link from "next/link";

function NotFound({}) {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <h4 className="font-bold">!!! Page Not Found!!!</h4>
        <Button asChild>
          <Link href="/">Goto Home</Link>
        </Button>
      </div>
    </Section>
  );
}

export default NotFound;
