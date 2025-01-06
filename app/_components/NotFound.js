"use client";

import { Button } from "@/components/ui/button";
import Section from "./Section";
import { useRouter } from "next/navigation";
function NotFound({ src, alt, content }) {
  const router = useRouter();
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={src} alt={alt} className="w-1/2" />
        <h4 className="font-bold">!!! No {content} found !!!</h4>
        <Button onClick={() => router.push("/")}>Goto Home</Button>
      </div>
    </Section>
  );
}

export default NotFound;
