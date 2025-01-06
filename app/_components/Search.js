"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function Search({ className }) {
  const router = useRouter();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams();
    if (query.length < 3) return;
    if (query) {
      params.set("query", query);
    }
    router.push(`/search?${params.toString()}`); // Redirect to the search page
  }, 500);

  return (
    <div>
      <Input
        placeholder="Search"
        className={className}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
