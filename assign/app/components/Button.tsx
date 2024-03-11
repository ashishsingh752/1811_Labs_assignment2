"use client";

const SignInButton = function () {
  return (
    <>
      <button className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Login
      </button>
    </>
  );
};

const GoogleInButton = function () {
  return (
    <>
      <button className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Login with Google
      </button>
    </>
  );
};

const ClearButton = function () {
  return (
    <>
      <button
        type="button"
        className=" p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200"
      >
        Clear All
      </button>
    </>
  );
};

const CrossButton = function () {
  return (
    <>
      <button
        type="button"
        className=" p-1 text-red-600 mb-7 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200"
      >
        X
      </button>
    </>
  );
};

const BuyButton = function () {
  return (
    <>
      <button
        type="button"
        className=" p-2 w-full text-white bg-blue-500 border-t-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-blue-600"
      >
        Buy
      </button>
    </>
  );
};

const CancleButton = function () {
  return (
    <>
      <button
        type="button"
        className="p-2 w-full text-black border-t-gray-300 rounded-md outline outline-offset-2 outline-gray-300 hover:bg-gray-200"
      >
        Cancel
      </button>
    </>
  );
};

export {
  SignInButton,
  GoogleInButton,
  ClearButton,
  CrossButton,
  BuyButton,
  CancleButton,
};
