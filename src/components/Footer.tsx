import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='w-full min-h-[80px] bg-primary flex items-center'>
      <div className='h-full w-full flex items-center justify-between px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-0 container'>
        <div>
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
