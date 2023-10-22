"use client";

import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Input = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
};

type CategoryOptions = {
  register: UseFormRegister<Input>;
  errors: FieldErrors;
  categories?: {
    name: string;
    id: string;
  }[];
};

const CategoryOptions: FC<CategoryOptions> = ({
  register,
  errors,
  categories,
}) => {
  return (
    <div className='sm:w-1/3'>
      <label htmlFor='category' className='flex flex-col gap-1'>
        Category
        <select
          {...register("category", { required: true })}
          id='category'
          className='w-full py-2 px-4 border outline-none rounded-md bg-transparent'
        >
          <option value=''>Select...</option>
          {categories &&
            categories.map((category) => (
              <option
                value={category.name}
                key={category.id}
                className='capitalize'
              >
                {category.name}
              </option>
            ))}
        </select>
      </label>
      {errors.category?.message && (
        <p className='text-xs text-red-500'>
          Minimum length of this field should be 10
        </p>
      )}
    </div>
  );
};

export default CategoryOptions;
