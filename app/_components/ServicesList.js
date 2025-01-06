import { getServices } from "../_lib/data-service";
import Box from "./Box";

async function ServicesList() {
  const services = await getServices();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {services.map((service) => (
        <Box key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServicesList;
