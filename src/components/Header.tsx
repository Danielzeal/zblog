import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className='h-[80px] w-full bg-[#f6f33c] sticky top-0 z-50 self-start'>
      <div className='h-full w-full flex items-center justify-between px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-0 container'>
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
