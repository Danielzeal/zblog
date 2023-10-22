"use client";

import { adminLinks } from "@/constants";
import Logo from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const AdminNav = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className='lg:w-2/12 md:w-3/12 md:h-screen h-[80px] overflow-hidden sticky top-0 bg-gray-950 p-8 flex md:flex-col items-center justify-between md:items-start md:justify-start gap-16'>
      <div>
        <Logo />
      </div>
      <nav className='md:space-y-12 hidden sm:flex gap-8 items-center justify-center md:block'>
        <ul className='flex md:flex-col gap-4 uppercase font-bold'>
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
        <button className='px-6 py-2 rounded-md bg-red-200 font-bold text-gray-950'>
          Logout
        </button>
      </nav>
    </section>
  );
};

export default AdminNav;
