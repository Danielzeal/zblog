"use client";

import newCategory from "@/actions/newCategory";
import { FormEvent, useState } from "react";

const CategoryForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await newCategory(name);
    alert(res?.message);
    setName("");
  };

  return (
    <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Category: <br />
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
          placeholder='Enter category'
          className='w-full py-2 bg-transparent rounded-md border px-4 outline-none'
        />
      </label>
      <div className=''>
        <button
          type='submit'
          className='py-2 px-6 bg-red-200 text-gray-950 rounded-md font-bold'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
