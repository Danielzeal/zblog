import AuthProvider from "@/providers/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  title: "Blog",
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
            <ToastContainer theme='dark' autoClose={4000} />
            <main className='bg-[rgb(238,238,238)] text-foreground min-h-screen'>
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
