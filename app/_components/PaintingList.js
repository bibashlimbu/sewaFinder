import Box from "./Box";
import { getPainting } from "../_lib/data-service";

async function PaintingList() {
  const paintingServices = await getPainting();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {paintingServices.map((paintingService) => (
        <Box key={paintingService.id} service={paintingService} />
      ))}
    </div>
  );
}

export default PaintingList;
