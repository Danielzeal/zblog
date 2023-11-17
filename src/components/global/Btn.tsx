import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

const Btn = () => {
  const handleSignOut = () => {
    signOut();
    redirect("/");
  };
  return (
    <motion.button
      whileHover={{ scaleX: 1.2 }}
      whileTap={{ scale: 0.85 }}
      className='px-6 py-2 font-semibold bg-primary-foreground text-foreground self-center rounded-md'
      onClick={handleSignOut}
    >
      Logout
    </motion.button>
  );
};

export default Btn;
