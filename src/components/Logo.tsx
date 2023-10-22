"use client";

import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className='font-bold md:text-xl test-lg text-orange-500'>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: easeInOut },
          }}
          whileTap={{ scale: 0.8, color: "green" }}
          className='w-full h-full'
        >
          Z-Blog
        </motion.div>
      </Link>
    </>
  );
};

export default Logo;
