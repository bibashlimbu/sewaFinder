import HeroSection from "@/app/_components/HeroSection";
import Categories from "@/app/_components/Categories";
import PopularService from "./_components/PopularService";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <PopularService />
    </div>
  );
}
