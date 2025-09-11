import { Metadata } from "next";

export default function BookingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "Book Your Journey - London Coupes",
  description:
    "Schedule your distinguished chauffeur service with our classic Rover P5B."
};
