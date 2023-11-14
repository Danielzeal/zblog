import AuthProvider from "@/providers/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
  variable: "--font-lora",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Z-Blog",
  description: "Reporting daily event how it is",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${mont.className} ${lora.variable}`}>
        <AuthProvider>
          <div className='min-h-screen'>
            <main className='bg-[rgb(238,238,238)] text-textPrimary min-h-screen'>
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
