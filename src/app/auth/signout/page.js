"use client";

import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase/firebase";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  useEffect(() => {
    const logOut = async () => {
      try {
        await signOut(auth);
        router.push("/auth/signin");
      } catch (error) {
        console.error(`Error signing out: ${error.message}`);
      }
    };

    logOut();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-xl font-semibold text-primary">Signing you out...</p>
    </div>
  );
};

export default SignOut;
