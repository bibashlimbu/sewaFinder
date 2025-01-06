"use server";

import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { revalidatePath } from "next/cache";

export async function createBooking(formData) {
  console.log(formData);
  const session = await auth();
  if (!session) throw new Error("you must be login ");

  const newBooking = {
    ...formData,
    userId: session.user.userId,
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created", error.message);

  redirect("/services/thankyou");
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be login");
  const address = formData.get("address");
  const phoneNumber = formData.get("phoneNumber");

  if (
    !/^(?:\+977[-\s]?)?(?:98[0-9]{8}|97[2-9][0-9]{7}|01[0-9]{6,8})$/.test(
      phoneNumber
    )
  ) {
    throw new Error("Invalid phone number");
  }

  const updatedProfile = { address, phoneNumber };

  const { data, error } = await supabase
    .from("user")
    .update(updatedProfile)
    .eq("id", session.user.userId);

  if (error) console.error(error);

  revalidatePath("/account");
}

export async function signinAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signoutAction() {
  await signOut({
    redirectTo: "/",
  });
}
