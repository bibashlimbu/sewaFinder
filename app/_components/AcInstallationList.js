import { getAcServicing } from "../_lib/data-service";
import Box from "./Box";

async function AcInstallationList() {
  const acServices = await getAcServicing();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {acServices.map((acServices) => (
        <Box key={acServices.id} service={acServices} />
      ))}
    </div>
  );
}

export default AcInstallationList;
