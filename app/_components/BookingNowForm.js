"use client";

import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createBooking } from "../_lib/action";
import { useBooking } from "./BookingContext";
import { format } from "date-fns";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "FullName must be at least 2 characters long" })
    .max(50, { message: "Full name must not exceed 50 characters" }),

  address: z
    .string()
    .min(2, { message: "Address must be at least 5 characters long" })
    .max(100, { message: "Address must not exceed 100 characters" }),

  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Phone number must be valid and include country code if necessary",
  }),

  landMark: z
    .string()
    .min(2, { message: "Landmark must be at least 2 characters long" })
    .max(50, { message: "Landmark must not exceed 50 characters" })
    .optional(),

  email: z.string().email({ message: "Please enter a valid email address" }),

  bookingNote: z
    .string()
    .min(2, { message: "Note must be at least 2 characters long" })
    .max(200, { message: "Note must not exceed 200 characters" })
    .optional(),
});

function BookingNowForm({ service }) {
  const { id } = service;
  const { date } = useBooking();
  // const bookingDate = format(date, "PP");

  // 1. Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      phoneNumber: "",
      landMark: "",
      email: "",
      note: "",
    },
  });

  // 2. Define a submit handler
  function onSubmit(values) {
    // Do something with the form values.
    // This will be type-safe and validated
    createBooking({ ...values, serviceId: id, bookingDate: date });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Name<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="john Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Address<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Bargachii, Biratnagar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Phone Number<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="98********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="landMark"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Landmark</FormLabel>
                <FormControl>
                  <Input placeholder="near ganesh chowk" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  email<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bookingNote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking note</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your booking note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Confirm Booking
        </Button>
      </form>
    </Form>
  );
}

export default BookingNowForm;
