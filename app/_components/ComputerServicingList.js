import { getComputerServicing } from "../_lib/data-service";
import Box from "./Box";

async function ComputerServicingList() {
  const computerServices = await getComputerServicing();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {computerServices.map((computerServices) => (
        <Box key={computerServices.id} service={computerServices} />
      ))}
    </div>
  );
}

export default ComputerServicingList;
