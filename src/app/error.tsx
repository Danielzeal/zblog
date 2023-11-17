"use client";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Error from "next/error";
import { FC } from "react";
import { motion } from "framer-motion";

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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => reset()}
          className='font-semibold bg-[#1a2f2f] text-white py-2 px-6 rounded-md'
        >
          Try Again!
        </motion.button>
      </div>
      <Footer />
    </section>
  );
};

export default error;
