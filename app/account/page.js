import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "../_components/Section";
import { auth } from "../_lib/auth";
import { Separator } from "@/components/ui/separator";
import SignoutButton from "../_components/SignoutButton";
import Profile from "../_components/Profile";
import BookedDetails from "../_components/BookedDetails";
async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ")[0];
  return (
    <Section>
      <div className="flex items-center justify-between mb-2">
        <p className="text-lg md:text-lg font-semibold">Hello {firstName}</p>
        <SignoutButton />
      </div>
      <Separator />
      <Tabs defaultValue="account" className="w-full mt-2">
        <TabsList className="grid  grid-cols-2 m-auto sm:w-1/2 w-3/4">
          <TabsTrigger value="account">Profile</TabsTrigger>
          <TabsTrigger value="password">Bookings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Profile />
        </TabsContent>
        <TabsContent value="password">
          <BookedDetails />
        </TabsContent>
      </Tabs>
    </Section>
  );
}

export default Page;
