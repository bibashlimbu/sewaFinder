import BookNowCard from "@/app/_components/BookNowCard";
import LoginMessage from "@/app/_components/LoginMessage";
import Section from "@/app/_components/Section";
import ServiceDetails from "@/app/_components/ServiceDetails";
import { auth } from "@/app/_lib/auth";
import { getServiceById } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { serviceId } = await params;

  const { employee } = await getServiceById(serviceId);

  return {
    title: employee,
  };
}

async function page({ params }) {
  const { serviceId } = await params;
  const session = await auth();

  const service = await getServiceById(serviceId);

  return (
    <Section className="md:py-10 py-5">
      <div className="mt-1 flex gap-10 flex-col md:flex-row">
        <ServiceDetails service={service} />
        {session?.user ? (
          <BookNowCard service={service} user={session.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </Section>
  );
}

export default page;
