"use client";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

type Props = {
  categories?:
    | {
        name: string;
        id: string;
      }[]
    | { message: string };
  category?: string;
};

const SelectCategory: FC<Props> = ({ category, categories }) => {
  let find;
  if (category === undefined) {
    find = "";
  } else {
    find = category;
  }

  const [cat, setCat] = useState(find);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!cat) {
      router.push(`${pathname}`);
    } else {
      router.push(`?category=${cat}`);
    }
  }, [cat, router, pathname]);

  return (
    <div className='flex flex-col gap-2 my-8 md:px-6'>
      <label htmlFor='category'>Select Category</label>
      <select
        className='w-full max-w-[350px] py-2 px-2 rounded-md outline-none'
        name='category'
        value={cat}
        id='category'
        onChange={(e) => setCat(e.target.value)}
      >
        <option value=''>All</option>
        {Array.isArray(categories) &&
          categories.map((c) => (
            <option key={c.id} value={c.name} className='capitalize'>
              {c.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectCategory;
