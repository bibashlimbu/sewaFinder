import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function Box({ service }) {
  return (
    <Link href={`/services/${service.id}`}>
      <Card className="p-3">
        <div className="relative aspect-video">
          <Image
            quality={100}
            fill
            sizes="100%"
            className="object-cover"
            src={service.image}
            alt={service.serviceName}
            priority
          />
        </div>

        <CardContent className="p-0">
          <CardTitle className="mt-3 text-xl">{service.serviceName}</CardTitle>
          <p className="text-sm">By {service.employee}</p>
          <p className="text-primary text-lg my-2">
            Rs.{service.price} {service.priceUnit}
          </p>
        </CardContent>
        <CardFooter className="p-0">
          <p>{service.description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default Box;
