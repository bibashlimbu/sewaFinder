import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format, parseISO } from "date-fns";
import Image from "next/image";

function BookedCard({ bookedService }) {
  const {
    bookingDate,
    services: { id: serviceId, image, price, employee, priceUnit, serviceName },
  } = bookedService;
  return (
    <Card className="py-3">
      <CardContent className="px-4">
        <div className="flex gap-2 mb-2">
          <div className="relative aspect-video w-40">
            <Image fill src={image} alt="Booked Service" />
          </div>
          <div>
            <p>#{serviceId}</p>
            <p className="font-bold">{serviceName}</p>
            <p>By {employee}</p>
            <p className="text-primary">
              {format(parseISO(bookingDate.replace(" ", "T")), "MMM d, yyyy")}
            </p>
          </div>
        </div>

        <Separator />
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Total</h1>
            <p className="font-bold text-lg">
              {price} {priceUnit}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-sm pb-0 px-4">
        Your booking has been forwarded to Sewa Finder
      </CardFooter>
    </Card>
  );
}

export default BookedCard;
