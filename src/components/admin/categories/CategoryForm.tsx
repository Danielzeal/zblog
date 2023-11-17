"use client";

import newCategory from "@/actions/newCategory";
import { Button } from "@/components/ui/button";
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
        <Button type='submit' className='text-foreground'>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CategoryForm;
