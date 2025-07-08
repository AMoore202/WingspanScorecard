import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "@/app/globals.css";

const redhat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wingspan Scorecard",
  description: "Scorecard for tracking scores from the game Wingspan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redhat.className}>{children}</body>
    </html>
  );
}
