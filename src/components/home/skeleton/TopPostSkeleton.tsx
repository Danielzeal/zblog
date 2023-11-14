import Heading from "@/components/Heading";

const TopPostsSkeleton = () => {
  const myArray = Array.from({ length: 3 }, (num) => num);

  return (
    <section className='my-8 md:px-6'>
      <Heading text='top posts' />
      <div className='flex flex-col md:flex-row gap-6 h-full'>
        <div className='md:w-1/2 sm:h-[600px] h-[400px] p-3 flex flex-col gap-3 bg-white rounded-md'>
          <div className='relative sm:h-[70%] h-[60%] w-full bg-gray-100'></div>
          <div className='sm:h-[30%] flex flex-col justify-between h-[40%]'>
            <h2 className='mb-4 w-[300px] h-4 bg-gray-100'></h2>
            <div>
              <p className='w-[55%] h-3 bg-gray-100 mb-4'></p>
              <p className='w-[70%] h-3 bg-gray-100'></p>
            </div>
          </div>
        </div>
        <section className='md:w-1/2 flex flex-col gap-6 h-[600px]'>
          {myArray.map((_, num) => (
            <div
              key={num}
              className='flex p-3 h-1/3 bg-white gap-3 rounded-md hover:bg-[#fbf6f6] hover:translate-y-2 hover:shadow-lg transition-all duration-200 ease-in-out'
            >
              <div className='h-full w-2/5 bg-gray-100'></div>
              <div className='flex flex-col justify-between w-3/5'>
                <h2 className='w-[80%] h-4 bg-gray-100'></h2>
                <div>
                  <p className='w-[48%] h-3 bg-gray-100 mb-4'></p>
                  <p className='w-[60%] h-3 bg-gray-100'></p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default TopPostsSkeleton;
