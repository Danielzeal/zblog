"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AddImage from "./AddImage";
import newPost from "@/actions/newPost";
import CategoryOptions from "./CategoryOptions";
import { motion } from "framer-motion";
import Tags from "./Tags";

type Input = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
};

type Props = {
  categories?: { name: string; id: string }[];
};

const Form = ({ categories }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      image: "",
      category: "",
    },
  });

  useEffect(() => {
    setValue("tags", tags, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }, [tags, setValue]);

  useEffect(() => {
    setValue("image", image, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }, [image, setValue]);

  const handleDeleteTag = (ind: number) => {
    const newData = tags.filter((_, index) => {
      return ind !== index;
    });
    setTags(newData);
  };

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const res = await newPost(data);
    alert(res?.message);
    reset();
    setTags([]);
    setImage("");
  };

  return (
    <form
      className='w-full flex flex-col gap-3'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-1'>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          placeholder='Enter title'
          id='title'
          {...register("title", {
            required: "Field is required",
            minLength: {
              value: 10,
              message: "Minimun length of 10 characters",
            },
          })}
          className='border outline-none py-2 px-4 rounded-md w-full bg-transparent'
        />
        {errors.title?.message && (
          <p className='text-xs text-red-500'>
            Minimum length of this field should be 10
          </p>
        )}
      </div>
      <AddImage setImage={setImage} image={image} />
      <div className='flex gap-3 md:gap-6 flex-col sm:flex-row'>
        <CategoryOptions
          register={register}
          errors={errors}
          categories={categories}
        />
        <Tags tags={tags} setTags={setTags} />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='description'>Description</label>
        <textarea
          {...register("description", {
            required: "Field is required",
            minLength: {
              value: 10,
              message: "This minimum length of this field should be 40",
            },
          })}
          id='description'
          cols={30}
          rows={10}
          className='w-full border py-2 px-4 rounded-md outline-none bg-transparent'
          placeholder='Description'
        ></textarea>
        {errors.description?.message && (
          <p className='text-xs text-red-500'>{errors.description.message}</p>
        )}
      </div>
      {tags.length > 0 && (
        <div className=' text-black flex items-center justify-center gap-2 my-6'>
          {tags.map((t, ind) => (
            <span
              key={`${t}-${ind}`}
              className='py-2 px-4 bg-white rounded-md'
              onClick={() => handleDeleteTag(ind)}
            >
              {t}
            </span>
          ))}
        </div>
      )}
      <motion.button
        whileHover={{ scaleX: 1.2 }}
        whileTap={{ scale: 0.85 }}
        type='submit'
        className='w-full sm:max-w-[200px] py-2 font-semibold bg-white text-black self-center rounded-md'
      >
        Submit
      </motion.button>
    </form>
  );
};

export default Form;
