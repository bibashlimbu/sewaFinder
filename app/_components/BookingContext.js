"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

const initialState = undefined;

function BookingProvider({ children }) {
  const [date, setDate] = useState(initialState);
  return (
    <BookingContext.Provider value={{ date, setDate }}>
      {children}
    </BookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
}

export { BookingProvider, useBooking };
