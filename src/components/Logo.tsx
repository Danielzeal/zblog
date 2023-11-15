"use client";

import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className='font-bold'>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: easeInOut },
          }}
          whileTap={{ scale: 0.8 }}
          className='w-full h-full font-mono text-2xl'
        >
          blog
        </motion.div>
      </Link>
    </>
  );
};

export default Logo;
