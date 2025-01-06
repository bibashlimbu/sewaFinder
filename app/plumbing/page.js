import { Suspense } from "react";
import { SkeletonCard } from "../_components/SkeletonCard";
import Section from "../_components/Section";
import PlumbingServiceList from "../_components/PlumbingServiceList";
import ServicesHeader from "../_components/ServicesHeader";

export const metadata = {
  title: "Plumbing",
};
async function Page() {
  return (
    <Section className="md:py-10 py-5">
      <ServicesHeader>Category: Plumbing</ServicesHeader>

      <Suspense
        fallback={
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
            </div>
          </>
        }
      >
        <PlumbingServiceList />
      </Suspense>
    </Section>
  );
}

export default Page;
