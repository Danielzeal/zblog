"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className='w-full flex h-screen items-center justify-center'>
      <div className='w-full max-w-[500px] p-8 bg-primary shadow-md flex flex-col gap-3 rounded-md'>
        <Button
          variant='secondary'
          className='flex items-center justify-center'
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
