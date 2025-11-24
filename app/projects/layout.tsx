import type { ReactNode } from "react";
import "@/app/globals.css";

export default function AboutLayout({
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
