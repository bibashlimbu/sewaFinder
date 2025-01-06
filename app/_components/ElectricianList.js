import { getElectrician } from "../_lib/data-service";
import Box from "./Box";

async function ElectricianList() {
  const electricianServices = await getElectrician();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {electricianServices.map((electricianServices) => (
        <Box key={electricianServices.id} service={electricianServices} />
      ))}
    </div>
  );
}

export default ElectricianList;
