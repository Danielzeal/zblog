"use client";

import { adminLinks } from "@/constants";
import Logo from "../Logo";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";

type Props = {};

const AdminNav = (props: Props) => {
  const pathname = usePathname();

  const handleSignOut = () => {
    signOut();
    redirect("/");
  };

  return (
    <section className='lg:w-[17%] md:w-[25%] md:h-screen h-[80px] overflow-hidden sticky top-0 bg-[#f6f33c] p-8 flex md:flex-col items-center justify-between md:items-start md:justify-start gap-16'>
      <div>
        <Logo />
      </div>
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
        <motion.button
          whileHover={{ scaleX: 1.2 }}
          whileTap={{ scale: 0.85 }}
          className='px-6 py-2 font-semibold bg-white text-black self-center rounded-md'
          onClick={handleSignOut}
        >
          Logout
        </motion.button>
      </nav>
    </section>
  );
};

export default AdminNav;
