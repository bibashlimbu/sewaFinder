import { Separator } from "@/components/ui/separator";
import NewsCarousel from "./NewsCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <>
      <section className="md:py-10 py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between  md:items-center">
          <div className="w-3/4">
            <h1 className="text-3xl sm:text-4xl md:text-3lg lg:text-6xl font-bold text-primary md:mb-0 mb-3">
              Book Home Service
              <br /> Providers
              <br />
              at your fingertips
            </h1>
            <Button asChild className="btn btn-primary md:mt-4 mb-4 btn-lg">
              <Link href="/services">
                Get Started <ArrowRight />
              </Link>
            </Button>
          </div>
          <NewsCarousel />
        </div>
      </section>
      <Separator />
    </>
  );
}

export default HeroSection;
