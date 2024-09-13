"use client";

import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase/firebase";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card w-88 bg-base-200 shadow-xl text-primary">
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title text-center text-2xl md:text-3xl mb-2">
            Welcome
          </h2>
          <p className="mb-2">Please sign in to track orders</p>

          {/* Email/Password Login Form */}

          <form
            onSubmit={handleEmailLogin}
            className="space-y-4 flex flex-col items-center"
          >
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-accent text-base-100" type="submit">
              Sign in with Email
            </button>
            <h3>
              Don't have an account?{" "}
              <Link href="" className="text-accent cursor-pointer">
                Register
              </Link>
            </h3>
          </form>
          <div className="divider divider-primary">Or</div>

          {/* Google Sign-In Button */}
          <button
            className="btn btn-accent text-base-100 mb-4"
            onClick={signInWithGoogle}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
