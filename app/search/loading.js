import Section from "../_components/Section";
import { SkeletonCard } from "../_components/SkeletonCard";

function Loading() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    </Section>
  );
}

export default Loading;
