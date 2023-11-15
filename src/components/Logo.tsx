"use client";

import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className='font-mono font-extrabold text-xl'>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: easeInOut },
          }}
          whileTap={{ scale: 0.8 }}
        >
          blog
        </motion.div>
      </Link>
    </>
  );
};

export default Logo;
