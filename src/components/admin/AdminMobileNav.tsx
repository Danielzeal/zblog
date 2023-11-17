"use client";

import { adminLinks } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Btn from "../global/Btn";

const AdminMobileNav = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) => {
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
        {adminLinks.map((lk, idx) => (
          <motion.li
            whileTap={{ scale: 0.8 }}
            key={idx}
            onClick={handleMenu}
            className='relative group capitalize text-xl font-semibold'
          >
            <Link href={lk.href}>{lk.link}</Link>
          </motion.li>
        ))}
      </ul>
      <Btn />
    </nav>
  );
};

export default AdminMobileNav;
