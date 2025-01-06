import { Suspense } from "react";
import Section from "../_components/Section";
import ServicesList from "../_components/ServicesList";
import { SkeletonCard } from "../_components/SkeletonCard";
import ServicesHeader from "../_components/ServicesHeader";

export const metadata = {
  title: "services",
};
async function Page() {
  return (
    <Section className="md:py-10 py-5">
      <ServicesHeader>All Services</ServicesHeader>

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
        <ServicesList />
      </Suspense>
    </Section>
  );
}

export default Page;
