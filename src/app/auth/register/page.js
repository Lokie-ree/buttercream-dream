"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/app/lib/firebase/firebase";
import { useRouter } from "next/navigation";
import { IoMdMail } from "react-icons/io";
import { FaSpinner, FaGoogle, FaKey } from "react-icons/fa";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setMessage(`User registered: ${userCredential.user.email}`);
      router.push("/");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      setIsLoading(false);
      console.error("Sign in error:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.error("Google sign in error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl text-primary border border-accent">
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title text-center text-2xl md:text-3xl mb-3">
            Create Your Account
          </h2>
          <form
            className="flex flex-col items-center space-y-4"
            onSubmit={handleRegister}
          >
            <label className="input input-bordered flex items-center gap-2">
              <IoMdMail />
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="grow"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="grow"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button className="btn btn-accent text-base-100" type="submit">
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Register New Account"
              )}
            </button>
          </form>
          {message && <p>{message}</p>}
          <div className="divider divider-primary">Or</div>
          <button
            className="btn btn-accent text-base-100"
            onClick={handleGoogleSignIn}
          >
            {" "}
            <FaGoogle />
            Register with Google
          </button>
          <p className="flex w-full text-sm gap-1 justify-center mt-2">
            Already have an account?{" "}
            <Link href="/auth/signin" className="font-bold hover:underline">
              Sign In Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
