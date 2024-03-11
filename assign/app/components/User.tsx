import React from "react";
import { CrossButton } from "./Button";

interface UserProps {}

const User: React.FC<UserProps> = () => {
  return (
    <div className="flex items-center justify-center  w-full h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 rounded-lg shadow-md bg-white">
        <div className="flex items-center">
          <img
            className="rounded-full w-14 h-14"
            src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
            alt="userImg"
          />
          <div className="flex-1 ml-4">
            <div className="flex justify-between items-center">
              <div className="name font-bold text-xl">Ashish Singh</div>
              <div className="plan rounded-md p-1 mr-4 bg-gray-200">
                Premium
              </div>
            </div>
            <div className="email">ashishsingh.nitr@gmail.com</div>
          </div>

          <CrossButton />
        </div>
        <br />
        <hr className="my-3" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              Account
            </label>
          </div>
          <hr />
          <div className="flex items-center">
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              Support
            </label>
          </div>
          <hr />
          <div className="flex items-center">
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              Log Out
            </label>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default User;
