// app/(main)/layout.tsx
import type { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import '@/app/globals.css'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {children}
      </main>
    </div>
  );
}