"use client";

import { Button } from "@/components/ui/button";
import Section from "./_components/Section";

function error({ error, resetErrorBoundary }) {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src="https://ldalruqkubplvhztlaqx.supabase.co/storage/v1/object/sign/Error-image/somethingWentWrong.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFcnJvci1pbWFnZS9zb21ldGhpbmdXZW50V3Jvbmcuc3ZnIiwiaWF0IjoxNzM1NjE4MTk2LCJleHAiOjIyMDg2NTgxOTZ9.60PZPivFhS4iDAAeubxR11_dXqGY4enT5VxQGYDFRi8&t=2024-12-31T04%3A09%3A56.468Z"
          alt="somethingWentWrong"
          className="lg:w-6/12 w-10/12"
        />
        <h4 className="font-bold">!!! Something went wrong !!!</h4>
        <p>{error.message}</p>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </div>
    </Section>
  );
}

export default error;
