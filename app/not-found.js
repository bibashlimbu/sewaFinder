"use client";
import { Button } from "@/components/ui/button";
import Section from "./_components/Section";
import Link from "next/link";

function NotFound({ resetErrorBoundary }) {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src="https://ldalruqkubplvhztlaqx.supabase.co/storage/v1/object/sign/service_image/somethingWentWrong.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzZXJ2aWNlX2ltYWdlL3NvbWV0aGluZ1dlbnRXcm9uZy5zdmciLCJpYXQiOjE3MzU1NDU4MjksImV4cCI6MTczNjQwOTgyOX0.EqQpRizSrO2O9Fc9sreR5VEghMoEx707sQRxgNVkVow&t=2024-12-30T08%3A03%3A49.305Z"
          alt="somethingWentWrong"
          className="w-5/12"
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
