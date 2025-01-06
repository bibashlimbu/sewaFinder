import { getPlumbingServices } from "../_lib/data-service";
import Box from "./Box";

async function PlumbingServiceList() {
  const plumbingServices = await getPlumbingServices();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {plumbingServices.map((plumbingServices) => (
        <Box key={plumbingServices.id} service={plumbingServices} />
      ))}
    </div>
  );
}

export default PlumbingServiceList;
