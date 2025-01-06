import SigninButton from "../_components/SigninButton";

export const metadata = {
  title: "login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text:sm md:text-3xl font-semibold">
        Sign in to access your account
      </h2>
      <SigninButton />
    </div>
  );
}
