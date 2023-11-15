"use client";

import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { signOut } from "next-auth/react";

const NavLinks = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <nav className='md:flex items-center space-x-10 hidden'>
        <ul className='flex items-center justify-between space-x-6 capitalize font-medium'>
          {links.map((lk, idx) => (
            <motion.li
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              key={idx}
              className='relative group'
            >
              <Link href={lk.href}>{lk.link}</Link>
              <div
                className={`${
                  pathname === lk.href
                    ? "w-full group-hover:w-0"
                    : "w-0 group-hover:w-full"
                } h-[2px] bg-textPrimary absolute transition-all duration-200 ease-in-out`}
              />
            </motion.li>
          ))}
          {data?.user.is_admin && (
            <motion.li
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className='relative group'
            >
              <Link href={"/admin"}>Admin</Link>
              <div
                className={`${
                  pathname === "/admin"
                    ? "w-full group-hover:w-0"
                    : "w-0 group-hover:w-full"
                } h-[2px] bg-textPrimary absolute transition-all duration-200 ease-in-out`}
              />
            </motion.li>
          )}
        </ul>
        {!data ? (
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.8 }}
          >
            <Link
              href={"/login"}
              className='bg-white py-2 px-6 rounded-md font-medium'
            >
              Login
            </Link>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.8 }}
            className='bg-white py-2 px-6 rounded-md uppercase font-bold text-black'
            onClick={() => signOut()}
          >
            Logout
          </motion.button>
        )}
      </nav>
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        className='p-2 md:hidden'
        onClick={handleMenu}
      >
        <FaList size={24} />
      </motion.button>

      <MobileNav menu={menu} setMenu={setMenu} />
    </>
  );
};

export default NavLinks;
