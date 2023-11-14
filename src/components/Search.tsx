"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";

const Search = ({ search }: { search?: string }) => {
  let find;
  if (search === undefined) {
    find = "";
  } else {
    find = search;
  }

  const [query, setQuery] = useState(find);
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm] = useDebounce(query, 300);

  useEffect(() => {
    if (searchTerm) {
      router.push(`?search=${searchTerm}`);
    } else {
      router.push(`${pathname}`);
    }
  }, [query, searchTerm, router, pathname]);

  return (
    <div className='flex items-center justify-center bg-white rounded-md px-4 py-[2px] w-full max-w-[500px] mx-auto'>
      <input
        type='text'
        value={query}
        name='search'
        id='search'
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search'
        className='flex-1 py-1 outline-none border-none'
      />
      <span>
        <FaSearch />
      </span>
    </div>
  );
};

export default Search;
