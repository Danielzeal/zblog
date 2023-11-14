const CardSkeleton = () => {
  return (
    <>
      <div className='w-full h-[250px] bg-gray-100' />
      <div className='flex flex-col mt-4 justify-between'>
        <h2 className='w-[80%] h-4 bg-gray-100'></h2>
        <div className=''>
          <p className='w-[48%] h-3 bg-gray-100 mb-4'></p>
          <p className='w-[60%] h-3 bg-gray-100'></p>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
