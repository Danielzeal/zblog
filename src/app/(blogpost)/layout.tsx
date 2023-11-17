import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Reporting daily event how it is",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='container flex-1'>{children}</div>
      <Footer />
    </div>
  );
}
