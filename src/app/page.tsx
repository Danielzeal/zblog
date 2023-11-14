import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePosts from "@/components/home/HomePosts";
import Loading from "@/components/home/Loading";
import { Suspense } from "react";

export default async function Home() {
  return (
    <section className='flex flex-col min-h-screen'>
      <Header />
      <Suspense fallback={<Loading />}>
        <HomePosts />
      </Suspense>
      <Footer />
    </section>
  );
}
