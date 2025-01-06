import Link from "next/link";
import Section from "../../_components/Section";

export default function Page() {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src="/thankyou.svg" className="w-5/12" />
        <h1 className="text-3xl font-semibold">Thank you for your booking!</h1>
        <Link
          href="/account"
          className="underline text-xl text-accent-500 inline-block"
        >
          Manage your booking &rarr;
        </Link>
      </div>
    </Section>
  );
}
