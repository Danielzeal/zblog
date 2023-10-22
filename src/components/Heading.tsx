import React from "react";

type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return (
    <div className='capitalize font-bold text-2xl font-lora max-w-fit mb-6'>
      <h1>{text}</h1>
      <div className='w-full h-1 bg-red-200 my-1' />
    </div>
  );
};

export default Heading;
