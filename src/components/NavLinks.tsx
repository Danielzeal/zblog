"use client";

import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const NavLinks = () => {
  const pathname = usePathname();
  const { data } = useSession();

  return (
    <>
      <nav className='md:flex items-center space-x-10 hidden'>
        <ul className='flex items-center justify-between space-x-6 uppercase font-semibold'>
          {links.map((lk, idx) => (
            <motion.li
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              key={idx}
              className='relative group text-gray-500'
            >
              <Link href={lk.href}>{lk.link}</Link>
              <div
                className={`${
                  pathname === lk.href
                    ? "w-full group-hover:w-0"
                    : "w-0 group-hover:w-full"
                } h-[2px] bg-slate-400 absolute transition-all duration-200 ease-in-out`}
              />
            </motion.li>
          ))}
          <motion.li
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className='relative group text-gray-500'
          >
            <Link href={"/admin"}>Admin</Link>
            <div
              className={`${
                pathname === "/admin"
                  ? "w-full group-hover:w-0"
                  : "w-0 group-hover:w-full"
              } h-[2px] bg-slate-400 absolute transition-all duration-200 ease-in-out`}
            />
          </motion.li>
        </ul>
        {!data ? (
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link
              href={"/login"}
              className='bg-white py-2 px-6 rounded-md uppercase font-bold text-black'
            >
              Login
            </Link>
          </motion.div>
        ) : (
          <Link
            href={"/login"}
            className='bg-white py-2 px-6 rounded-md uppercase font-bold text-black'
          >
            Logout
          </Link>
        )}
      </nav>

      {/* <nav className='absolute w-4/5 left-0 h-screen bg-white top-0 bottom-0 z-50'></nav> */}
    </>
  );
};

export default NavLinks;
