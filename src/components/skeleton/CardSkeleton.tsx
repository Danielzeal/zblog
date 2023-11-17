const CardSkeleton = () => {
  return (
    <>
      <div className='w-full h-[250px] bg-gray-200 animate-pulse' />
      <div className='flex flex-col mt-4 justify-between'>
        <h2 className='w-[80%] h-6 bg-gray-200 animate-pulse'></h2>
        <div className=''>
          <p className='w-[48%] h-5 bg-gray-200 animate-pulse mb-4'></p>
          <p className='w-[60%] h-5 bg-gray-200 animate-pulse'></p>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
