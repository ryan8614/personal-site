import type { Metadata } from "next";
import "../globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | Personal Site",
  description: "Learn more about me and my work.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-background text-foreground">
        {children}
    </div>
  );
}
