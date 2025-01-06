"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingNowForm from "./BookingNowForm";
import { useBooking } from "./BookingContext";
import { format } from "date-fns";
function BookingNow({ service }) {
  const { date } = useBooking();
  if (!date) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Booking Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-5">
            Book Service
          </DialogTitle>
          <DialogDescription className="text-md font-medium">
            Booking Date
          </DialogDescription>
          <DialogDescription className="font-bold">
            {format(date, "PP")}
          </DialogDescription>
        </DialogHeader>
        <BookingNowForm service={service} />
      </DialogContent>
    </Dialog>
  );
}

export default BookingNow;
