import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pudins Sem Forno",
  description: "Fature até 2 mil reais por semana com pudins sem forno!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head />
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
