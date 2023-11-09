"use client";

import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import { motion } from "framer-motion";

type Tags = {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
};

const Tags: FC<Tags> = ({ tags, setTags }) => {
  const [tag, setTag] = useState<string>("");

  const handleTag = useCallback(() => {
    if (!tag || tag.length < 3 || tags.length === 3) return;

    setTags((prev) => {
      return [...prev, tag];
    });

    setTag("");
  }, [tag, tags, setTags]);

  return (
    <div className='sm:w-2/3'>
      <label htmlFor='tag' className='flex flex-col gap-1'>
        Tag:
        <div className='w-full flex'>
          <input
            type='text'
            id='tag'
            className='bg-transparent rounded-l-md border py-2 px-4 sm:w-5/6 w-4/6 placeholder:text-inherit'
            value={tag}
            placeholder='Enter tag'
            onChange={(e) => setTag(e.target.value)}
          />
          <motion.button
            whileTap={{ scale: 0.85 }}
            type='button'
            onClick={handleTag}
            className='sm:w-1/6 w-2/6 py-2 bg-textPrimary text-white font-semibold rounded-r-md'
          >
            Click
          </motion.button>
        </div>
      </label>
    </div>
  );
};

export default Tags;
