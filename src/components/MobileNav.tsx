"use client";

import { links } from "@/constants";
import { signOut, useSession } from "next-auth/react";
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

  const handleMenu = () => {
    setMenu(false);
  };
  return (
    <nav
      className={`absolute w-4/5 flex flex-col items-center gap-8 py-[150px] ${
        menu ? "left-0" : "-left-[100vw]"
      } h-screen bg-primary top-0 transition-all duration-150 ease-in-out`}
    >
      <ul className='flex flex-col gap-4 uppercase'>
        {links.map((lk, idx) => (
          <motion.li
            whileTap={{ scale: 0.8 }}
            key={idx}
            onClick={handleMenu}
            className='relative group text-gray-500 capitalize text-2xl'
          >
            <Link href={lk.href}>{lk.link}</Link>
          </motion.li>
        ))}
        {data?.user.is_admin && (
          <motion.li
            whileTap={{ scale: 0.8 }}
            onClick={handleMenu}
            className='relative group text-gray-500'
          >
            <Link href={"/admin"}>Admin</Link>
          </motion.li>
        )}
      </ul>
      <div>
        {!data ? (
          <motion.div whileTap={{ scale: 0.8 }}>
            <Link
              href={"/login"}
              onClick={handleMenu}
              className='bg-white py-2 px-6 rounded-md font-bold text-black'
            >
              Login
            </Link>
          </motion.div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.8 }}
            className='bg-white py-2 px-6 rounded-md uppercase font-bold text-black'
            onClick={() => signOut()}
          >
            Logout
          </motion.button>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
