import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UpdateProfileForm from "./UpdateProfileForm";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

async function Profile() {
  const session = await auth();
  const user = await getUser(session.user.email);
  return (
    <Card className="lg:w-1/2 md:w-4/3 w-full m-auto ">
      <CardHeader className="px-4">
        <CardTitle>update your profile</CardTitle>
        <CardDescription>update your profile information here</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <UpdateProfileForm user={user} />
      </CardContent>
    </Card>
  );
}

export default Profile;
