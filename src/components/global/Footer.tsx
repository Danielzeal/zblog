import { Instagram, Mail, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='w-full min-h-[80px] bg-primary flex items-center'>
      <div className='h-full w-full container'>
        <div className='h-full md:px-6 flex flex-col gap-4'>
          <div className='flex justify-between'>
            <Logo />
            <div className='flex gap-5'>
              <a href='https://twitter.com/codewithzeal' target='_blank'>
                <Twitter />
              </a>
              <a href='https://www.instagram.com/codewithzeal/' target='_blank'>
                <Instagram />
              </a>
              <a href='mailto:danieluanhumen@gmail.com'>
                <Mail />
              </a>
            </div>
          </div>
          <p className='text-center text-sm'>&copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
