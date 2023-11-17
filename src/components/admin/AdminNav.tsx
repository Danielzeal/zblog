"use client";

import { adminLinks } from "@/constants";
import Logo from "../global/Logo";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Btn from "../global/Btn";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import AdminMobileNav from "./AdminMobileNav";

const AdminNav = () => {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <section className='lg:w-[17%] md:w-[25%] md:h-screen h-[80px] overflow-hidden sticky top-0 bg-primary p-8 flex md:flex-col items-center justify-between w-full md:items-start md:justify-start gap-16'>
      <Logo />

      <nav className='md:space-y-12 hidden sm:flex gap-8 items-center justify-center md:block'>
        <ul className='flex md:flex-col gap-4 capitalize font-semibold'>
          {adminLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                pathname === link.href ? "md:translate-x-5" : "md:translate-x-0"
              } transition-all duration-200 ease-in-out hover:scale-105`}
            >
              <Link href={link.href}>{link.link}</Link>
            </li>
          ))}
        </ul>
        <Btn />
      </nav>
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        className='p-2 sm:hidden'
        onClick={handleMenu}
      >
        <FaList size={24} />
      </motion.button>

      <AdminMobileNav menu={menu} setMenu={setMenu} />
    </section>
  );
};

export default AdminNav;
