"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AddImage from "./AddImage";
import newPost from "@/actions/newPost";
import CategoryOptions from "./CategoryOptions";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import Tags from "./Tags";
import TipTap from "./TipTap";
import { setCustomValue } from "@/functions";
import { postSchema } from "@/model/post";
import { z } from "zod";

type Input = z.infer<typeof postSchema>;

type Props = {
  categories?: { name: string; id: string }[];
};

const Form = ({ categories }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(postSchema),
  });

  useEffect(() => {
    if (tags && tags.length > 0) {
      setCustomValue(setValue, "tags", tags);
    }

    if (image) {
      setCustomValue(setValue, "image", image);
    }

    if (desc) {
      setCustomValue(setValue, "description", desc);
    }
  }, [tags, setValue, image, desc]);

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
    setDesc("");
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
          {...register("title")}
          className='border outline-none py-2 px-4 rounded-md w-full bg-transparent placeholder:text-inherit'
        />
        {errors.title?.message && (
          <p className='text-xs text-red-500'>{errors.title?.message}</p>
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
      <TipTap setDesc={setDesc} />
      {errors.description?.message && (
        <p className='text-xs text-red-500'>{errors.description?.message}</p>
      )}
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85 }}
        type='submit'
        className='w-full sm:max-w-[200px] py-2 font-semibold bg-textPrimary text-white self-center rounded-md'
      >
        Submit
      </motion.button>
    </form>
  );
};

export default Form;
