"use client";
import { usePathname, useRouter } from "next/navigation";
import { FC, SetStateAction, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
    if (!cat || cat === "all") {
      router.push(`${pathname}`);
    } else {
      router.push(`?category=${cat}`);
    }
  }, [cat, router, pathname]);

  return (
    <div className='flex flex-col gap-2 my-8 md:px-6'>
      <label htmlFor='category'>Select Category</label>
      <Select onValueChange={(value: SetStateAction<string>) => setCat(value)}>
        <SelectTrigger className='w-full max-w-[350px]'>
          <SelectValue placeholder='Select a category' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value='all'>All category</SelectItem>
            {Array.isArray(categories) &&
              categories.map((c) => (
                <SelectItem key={c.id} value={c.name} className='capitalize'>
                  {c.name}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCategory;
