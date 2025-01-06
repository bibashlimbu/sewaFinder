import SearchResultList from "../_components/SearchResultList";
import Section from "../_components/Section";

async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";

  return (
    <Section className="md:py-10 py-5">
      <SearchResultList query={query} />
    </Section>
  );
}

export default Page;
