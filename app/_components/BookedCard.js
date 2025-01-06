import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format, parseISO } from "date-fns";
import Image from "next/image";

const booked = {
  id: 1,
  serviceName: "Exterior Cleaning",
  employee: "John Doe",
  bookingDate: "jan 1, 2023",
  price: "2000",

  image:
    "https://ldalruqkubplvhztlaqx.supabase.co/storage/v1/object/sign/service_image/sercice-img1?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzZXJ2aWNlX2ltYWdlL3NlcmNpY2UtaW1nMSIsImlhdCI6MTczNTYxODk5MSwiZXhwIjoyMjA4NjU4OTkxfQ.Zi9sFFWJ-I9ZQMQXvj17uMHsL6gCkihRj0Bk530i_vU&t=2024-12-31T04%3A23%3A11.712Z",
};

function BookedCard({ bookedService }) {
  const {
    bookingDate,
    services: { id: serviceId, image, price, employee, priceUnit, serviceName },
  } = bookedService;
  return (
    <Card className="p-5">
      <CardContent>
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
      <CardFooter>Your booking has been forwarded to Sewa Finder</CardFooter>
    </Card>
  );
}

export default BookedCard;
