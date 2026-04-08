import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibest P&C Dental Care",
  description: "Advanced Dental Care With Compassion — Professional dental services you can trust.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}