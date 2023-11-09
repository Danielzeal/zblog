import NavLinks from "./NavLinks";
import Logo from "./Logo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='min-h-[80px] h-[80px] w-full bg-[#f6f33c] sticky top-0 z-50'>
      <div className='h-full w-full flex items-center justify-between px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-0 container'>
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
