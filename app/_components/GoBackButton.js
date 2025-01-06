"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function GoBackButton() {
  const router = useRouter();
  const isRootPage = router.asPath === "/";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => !isRootPage && router.back()}
      disabled={isRootPage}
    >
      <ArrowLeft />
    </Button>
  );
}

export default GoBackButton;
