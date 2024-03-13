"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

interface UserProps {}

const User: React.FC<UserProps> = () => {
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null);
    router.replace("/");
  };

  const handleOnClickAccount = function () {
    return router.push("/account");
  };

  return (
    <div className="flex items-center justify-center absolute w-auto h-auto bg-gray-100">
      <div className="w-full max-w-sm p-8 rounded-lg shadow-md bg-white">
        <div className="flex items-center">
          <Image
            className="rounded-full w-14 h-14"
            src={`https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg`}
            width={10}
            height={10}
            alt="userImg"
          />
          <div className="flex-1 ml-5">
            <div className="flex justify-between items-center gap-4">
              <div className="name font-bold text-xl">Ashish Singh</div>
              <div className="plan rounded-md p-1 mr-2 bg-gray-200">
                Premium
              </div>
            </div>
            <div className="email">ashishsingh.nitr@gmail.com</div>
          </div>
        </div>
        <br />
        <hr className="my-3" />
        <div className="flex flex-col gap-3">
          <button
            onClick={handleOnClickAccount}
            className="flex items-center hover:bg-gray-100 p-2 rounded-lg"
          >
            <label htmlFor="displayName" className="text-gray-500 text-md  ">
              <button>Account</button>
            </label>
          </button>
          <hr />
          <button className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              <button>Support</button>
            </label>
          </button>
          <hr />
          <button
            onClick={handleSignOut}
            className="flex items-center hover:bg-gray-100 p-2 rounded-lg"
          >
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              <button className="text-red-600  font-semibold">Log out</button>
            </label>
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default User;
