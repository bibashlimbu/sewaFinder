import { Separator } from "@/components/ui/separator";
import GoBackButton from "./GoBackButton";
import Image from "next/image";

function ServiceDetails({ service }) {
  return (
    <div className="lg:w-2/3 w-full">
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center gap-1">
          <GoBackButton />
          <h1 className="text-sm md:text-2xl lg:text-3xl font-semibold">
            {service.serviceName}
          </h1>
        </div>

        <p className="text-sm md:text-base lg:text-lg mt-2">
          by{" "}
          <span className="font-semibold text-primary">{service.employee}</span>
        </p>
      </div>
      <Separator />
      <div className="my-5 relative aspect-video">
        <Image
          src={service.image}
          alt={service.serviceName}
          className="w-full object-cover"
          quality={100}
          fill
          priority
          sizes="100%"
        />
      </div>
      <Separator />
      <div className="mt-3">
        <p className="text-sm">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceDetails;
