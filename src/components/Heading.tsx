type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return (
    <div className='capitalize font-bold text-xl md:text-2xl font-lora max-w-fit mb-6'>
      <h1>{text}</h1>
      <div className='w-full h-1 bg-textPrimary my-1' />
    </div>
  );
};

export default Heading;
