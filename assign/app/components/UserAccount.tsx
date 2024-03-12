// Signup.tsx
"use client";
import React, { useState } from "react";
import { CrossButton } from "./Button";

interface UserAccountProps {}

const UserAccount: React.FC<UserAccountProps> = () => {
  const [displayName, setDisplayName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleDisplayNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisplayName(event.target.value);
  };

  const handleEmailAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailAddress(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 rounded-md shadow-md bg-white">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-bold mb-2">Account</h1>
            <p className="mb-2">
              Choose the avatar that best describes your use case describes your
            </p>
          </div>
          <div className="flex ml-auto">
            <CrossButton />
          </div>
        </div>

        <br />
        <hr />
        <br />
        <form className="flex flex-col gap-6">
          {/* User name  */}
          <div className="flex flex- items-center">
            <label
              htmlFor="displayName"
              className="w-1/3 text-sm text-gray-500 font-"
            >
              Display Name
              <p className="mt-1 font-semibold">ashish singh</p>
            </label>
          </div>

          {/* User email  */}
          <div className="flex items-center">
            <label
              htmlFor="emailAddress"
              className="w-1/3 text-sm text-gray-500 font-medium"
            >
              Email Address
              <p className="mt-1 font-semibold">ashishsingh.nitr@gmail.com</p>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Current Plan</span>
            <span className="text-sm font-medium">Free</span>
          </div>

          <div className="flex items-center rounded-md p-3 bg-gray-200">
            <span className="text-sm text-gray-500">Your Credits = </span>
            <span className="text-sm font-medium">&nbsp;&nbsp;24</span>
          </div>
          <hr />

          <div className="w-full gap-4 p-2 rounded-md bg-[#fc5c13] text-white font-medium flex justify-between items-center">
            <span>Want to join the affiliate program?</span>
            <button className="outline outline-offset-2 outline-yellow-50 p-2 rounded-md">
              Join Now <span className="ml-2">&#8594;</span>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAccount;
