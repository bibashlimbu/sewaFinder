import { auth } from "../_lib/auth";
import { getBookings } from "../_lib/data-service";
import BookedCard from "./BookedCard";

async function BookedDetails() {
  const session = await auth();
  const bookedServices = await getBookings(session.user.userId);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
      {bookedServices.map((bookedService) => (
        <BookedCard key={bookedService.id} bookedService={bookedService} />
      ))}
    </div>
  );
}

export default BookedDetails;
