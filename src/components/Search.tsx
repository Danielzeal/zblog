"use client";

import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ search }: { search?: string }) => {
  const [query, setQuery] = useState<string | undefined>(search);
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`${pathname}?search=${query}`);
  };

  return (
    <form className='w-full max-w-[500px] mx-auto mb-6' onSubmit={handleSubmit}>
      <div className='flex items-center justify-center w-full bg-white rounded-md px-4 py-[2px]'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search'
          className='flex-1 py-1 outline-none border-none'
        />
        <button className=''>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
