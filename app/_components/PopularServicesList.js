import { getPopularServices } from "../_lib/data-service";
import Box from "./Box";

async function PopularServicesList() {
  const popularServices = await getPopularServices();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {popularServices.map((popularService) => (
        <Box key={popularService.id} service={popularService} />
      ))}
    </div>
  );
}

export default PopularServicesList;
