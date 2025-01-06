import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getServices() {
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description");

  if (error) {
    console.error(error.message);
    throw new Error("Services could not be loaded");
  }

  return data;
}

export async function getPopularServices() {
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description")
    .eq("collection", "popular service");

  if (error) {
    console.error(error.message);
    throw new Error("Popular services could not be loaded");
  }

  return data;
}

export async function getPlumbingServices() {
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description")
    .eq("category", "plumber");

  if (error) {
    console.error(error.message);
    throw new Error("Plumbing services could not be loaded");
  }

  return data;
}

export async function getComputerServicing() {
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description")
    .eq("category", "computer servicing");

  if (error) {
    console.error(error.message);
    throw new Error("Computer servicing services could not be loaded");
  }

  return data;
}

export async function getAcServicing() {
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description")
    .eq("category", "HVAC technicians");

  if (error) {
    console.error(error.message);
    throw new Error("AC servicing services could not be loaded");
  }

  return data;
}

export async function getElectrician() {
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description")
    .eq("category", "electrician");

  if (error) {
    console.error(error.message);
    throw new Error("Electrician services could not be loaded");
  }

  return data;
}

export async function getPainting() {
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description")
    .eq("category", "house painting");

  if (error) {
    console.error(error.message);
    throw new Error("Painting services could not be loaded");
  }

  return data;
}

export async function getSearchResults(searchQuery) {
  // Validate the search query
  if (!searchQuery || typeof searchQuery !== "string") {
    throw new Error("Invalid search query");
  }

  // Construct the query
  const { data, error } = await supabase
    .from("services")
    .select("id,serviceName,image,employee,price,priceUnit,description")
    .or(
      `category.ilike.%${searchQuery}%,serviceName.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`
    );

  // Error handling
  if (error) {
    console.error(error.message);
    throw new Error("Search results could not be loaded");
  }

  return data;
}

export async function getServiceById(id) {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getUser(email) {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase.from("user").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return data;
}

export async function getBookings(userId) {
  const { data, error, count } = await supabase
    .from("bookings")
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, bookingDate, services(id, image, serviceName, employee,price,priceUnit)"
    )
    .eq("userId", userId);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}
