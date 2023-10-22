"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Error from "next/error";
import { FC } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const error: FC<Props> = ({ error, reset }) => {
  return (
    <section className='h-screen flex flex-col'>
      <Header />
      <div className='flex-1 flex flex-col items-center gap-5 justify-center container'>
        <h1 className='md:text-3xl text-xl font-semibold text-center'>
          Oops! Something went wrong.
        </h1>
        <button onClick={() => reset()}>Try Again!</button>
      </div>
      <Footer />
    </section>
  );
};

export default error;
