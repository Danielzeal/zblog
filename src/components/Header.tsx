import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className='h-[80px] w-full bg-primary sticky top-0 z-50'>
      <div className='h-full w-full container'>
        <div className='flex items-center justify-between h-full md:px-6'>
          <Logo />
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
