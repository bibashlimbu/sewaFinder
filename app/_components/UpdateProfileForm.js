"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProfile } from "../_lib/action";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

function UpdateProfileForm({ user }) {
  const { email, fullName, address, phoneNumber } = user;
  return (
    <form action={updateProfile}>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">FullName</Label>
          <Input id="name" name="fullName" defaultValue={fullName} disabled />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" defaultValue={email} disabled />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="number"
            name="phoneNumber"
            defaultValue={phoneNumber}
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" defaultValue={address} required />
        </div>
        <ProfileButton />
      </div>
    </form>
  );
}

function ProfileButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          updating...
        </>
      ) : (
        "Update profile"
      )}
    </Button>
  );
}

export default UpdateProfileForm;
