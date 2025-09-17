import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TacTec — Revolutionising Football Club Management",
  description: "A modern platform consolidating football club operations into one powerful system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
