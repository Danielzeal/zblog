"use client";

import { links } from "@/constants";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileNav = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const { data } = useSession();
  return (
    <nav
      className={`absolute w-4/5 flex flex-col items-center gap-8 py-[100px] ${
        menu ? "left-0" : "-left-[100vw]"
      } h-screen bg-red-500 top-0 transition-all duration-150 ease-in-out`}
    >
      <ul className='flex flex-col gap-4 uppercase'>
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
        {data?.user.is_admin && (
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
        )}
      </ul>
      <div>
        {!data ? (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <Link
              href={"/login"}
              className='bg-white py-2 px-6 rounded-md font-bold text-black'
            >
              Login
            </Link>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className='bg-white py-2 px-6 rounded-md uppercase font-bold text-black'
          >
            Logout
          </motion.button>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
