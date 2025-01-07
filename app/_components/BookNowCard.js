import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Sparkle } from "lucide-react";
import DatePicker from "./DatePicker";
import { Separator } from "@/components/ui/separator";
import BookingNow from "./BookingNow";

function BookNowCard({ service, user }) {
  return (
    <Card className="lg:w-1/3 w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
            Book Service
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-2">
            signin as <span className="text-primary text-sm">{user.name}</span>
          </p>
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base lg:text-lg mt-2">Price</p>
          <span className="font-semibold text-primary">
            Rs.{service.price}
            {service.priceUnit}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-3 bg-primary rounded-md p-3 my-3">
          <div className="flex items-center gap-2 ">
            <Sparkle color="white" />
            <p className="text-white font-semibold">Price description</p>
          </div>
          <p className="mt-2 text-white ">{service.priceDescription}</p>
        </div>
        <Separator />
        <h2 className="text-sm md:text-base lg:text-lg my-2">Select Date</h2>
        <div className="xl:h-[290px] 2xl:h-[370px] lg:h-[165px] md:h-[120px] h-[115px] flex flex-col justify-between">
          <DatePicker />
          <BookingNow service={service} />
        </div>
      </CardContent>
    </Card>
  );
}

export default BookNowCard;
