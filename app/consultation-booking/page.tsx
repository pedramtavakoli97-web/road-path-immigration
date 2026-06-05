import type { Metadata } from "next";
import { ConsultationBooking } from "@/components/ConsultationBooking";

export const metadata: Metadata = {
  title: "Consultation Booking",
  description: "Book and pay for a Road Path Immigration consultation."
};

export default function ConsultationBookingPage() {
  return <ConsultationBooking locale="en" />;
}
