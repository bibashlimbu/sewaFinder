import Section from "./Section";
import PopularServicesList from "./PopularServicesList";
import { SkeletonCard } from "./SkeletonCard";
import { Suspense } from "react";

async function PopularService() {
  return (
    <Section>
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-3">
        Popular Services
      </h2>
      <Suspense
        fallback={
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
            </div>
          </>
        }
      >
        <PopularServicesList />
      </Suspense>
    </Section>
  );
}

export default PopularService;
