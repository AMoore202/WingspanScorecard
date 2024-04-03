import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "@/app/ui/globals.css";

const redhat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wingspan Scorecard",
  description: "Scorecard for tracking scores from the game Winspan",
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
