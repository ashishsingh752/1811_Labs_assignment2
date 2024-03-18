"use client";
import React, { useEffect } from "react";
import { GoogleInButton } from "../components/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { User } from "next-auth";
import Image from "next/image";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default  function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [openPassword, setOpenPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const router = useRouter();

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, [supabase.auth]);

  // console.log(loading, user);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);
    try {
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
               data: {DisplayName: username }, 
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      setUser(res.data.user);
      setEmail("");
      setPassword("");
      router.refresh();
      // router.replace("/signin");
    } catch (err: any) {
      console.error(err);
      setFormError(err.toString());
    }
  };
  


  const handleSignInWithGoogle = async () => {
    setFormError("");
    setSubmitting(true);
    try {
      const res = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (res.error) {
        throw new Error(res.error.message);
      }
    } catch (err: any) {
      console.error(err);
      setFormError(err.toString());
    }
  };
  
  useEffect(() => {
    if (user) {
      router.push("/home"); // Redirect to the home page
    }
  }, [user]);
  

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Image
          className="h-40 w-40"
          src={"https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif"}
          width={10}
          height={10}
          alt="Loading..."
          priority={true}
        />
      </div>
    );
  }

  if (user) {
    redirect("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="px-8 py-6 bg-white rounded-lg shadow-md text-left sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h3 className="text-2xl font-bold text-center">Video fast</h3>
        <p className="text-gray-700 text-base mt-4 mb-6">
          Let&apos;s get started by creating your account
        </p>
        <div className="p2-4">
          <button
            onClick={handleSignInWithGoogle}
            className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue with Google
          </button>
        </div>
        <div className="w-full flex items-center justify-between mt-4">
          <hr className="w-full bg-gray-300 border-0" />
          <span className="text-sm text-gray-500 px-2">OR</span>
          <hr className="w-full bg-gray-300 border-0" />
        </div>

        <div className="w-full  flex items-center justify-center mt-2">
          <span className="text-xl font-bold px-2">Register</span>
        </div>

        {/* form for the user registration*/}
        <form onSubmit={handleSignUp}>
          {/* <div className="mt-6">
            <label
              className="text-sm text-gray-700 font-medium block mb-2"
              htmlFor="username"
            >
              Username *
            </label>
            <input
              id="username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
              placeholder="username"
            />
          </div> */}

          <div className="mt-6">
            <label
              className="text-sm text-gray-700 font-medium block mb-2"
              htmlFor="email"
            >
              Enter email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
              placeholder="lets.join@videofast.com"
            />
          </div>

          <div className="mt-6 relative">
            <label
              className="text-sm text-gray-700 font-medium block mb-2"
              htmlFor="password"
            >
              Set password *
            </label>
            <div className="flex">
              <input
                id="password"
                type={openPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4  py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                placeholder="Password"
              />
              <div
                style={{ cursor: "pointer" }}
                className="absolute inset-y-0 right-0 pr-3 text-2xl pt-6 flex items-center"
              >
                <div onClick={() => setOpenPassword((prop) => !prop)}>
                  {openPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>
          </div>


          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Signup
            </button>
          </div>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-500">
          have an account?{" "}
          <a
            href={"/signin"}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
