import type { Metadata } from "next";
import { ConsultationBooking } from "@/components/ConsultationBooking";

export const metadata: Metadata = {
  title: "رزرو مشاوره",
  description: "رزرو و پرداخت مشاوره مهاجرت با Road Path Immigration."
};

export default function FarsiConsultationBookingPage() {
  return <ConsultationBooking locale="fa" />;
}
