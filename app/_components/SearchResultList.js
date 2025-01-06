import { getSearchResults } from "../_lib/data-service";
import Box from "./Box";
import NotFound from "./NotFound";
import ServicesHeader from "./ServicesHeader";

async function SearchResultList({ query }) {
  const searchResults = await getSearchResults(query);

  if (!searchResults || searchResults.length === 0)
    return (
      <NotFound
        src={
          "https://ldalruqkubplvhztlaqx.supabase.co/storage/v1/object/sign/Error-image/no-item-found.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFcnJvci1pbWFnZS9uby1pdGVtLWZvdW5kLnN2ZyIsImlhdCI6MTczNTYyMTgzOCwiZXhwIjoyMjA4NjYxODM4fQ.Vqvhal0ntVVRcRo68hpGCA2nnk5O6IKuprNqO3e-E68&t=2024-12-31T05%3A10%3A38.928Z"
        }
        alt="no service found"
        content="service"
      />
    );

  return (
    <div>
      <ServicesHeader showBackButton={false}>
        Showing {searchResults.length}{" "}
        {searchResults.length === 1 ? "result" : "results"} for{" "}
        <b>&quot;{query}&quot;</b>
      </ServicesHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {searchResults.map((searchResults) => (
          <Box key={searchResults.id} service={searchResults} />
        ))}
      </div>
    </div>
  );
}

export default SearchResultList;
