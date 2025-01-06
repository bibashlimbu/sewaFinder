import Link from "next/link";
import Section from "../../_components/Section";

export default function Page() {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src="https://ldalruqkubplvhztlaqx.supabase.co/storage/v1/object/sign/Error-image/thankyou.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFcnJvci1pbWFnZS90aGFua3lvdS5zdmciLCJpYXQiOjE3MzYxNjMyOTUsImV4cCI6Mjk5NzYwMzI5NX0.1dpeA_qKb2T9BQhpVR2VluGzuPorUBiv_Lh_Os6ON9I&t=2025-01-06T11%3A34%3A56.096Z"
          className="lg:w-6/12 w-10/12"
        />
        <h1 className="text-3xl font-semibold text-center">
          Thank you for your booking!
        </h1>
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
