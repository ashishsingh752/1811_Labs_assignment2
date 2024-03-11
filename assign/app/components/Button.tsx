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

const MainButton = function () {
  return (
    <>
      <button
        type="button"
        className="p-2 bg-red-100  text-black border-t-gray-300 rounded-md outline outline-offset-2 outline-gray-300 hover:bg-gray-200"
      >
        <div className="flex justify-center items-center gap-3">
          <div className="text-red-500 font-bold">Your Credit: 4</div>
        </div>
      </button>
    </>
  );
};

const MyVideoButton = function () {
  return (
    <>
      <button type="button" className="p-2  text-black underline">
        <div className="flex justify-center underline items-center gap-3">
          <img
            src=" https://www.svgrepo.com/download/335062/dropdown.svg"
            className="w-5 h-5"
            alt=""
          />
          <div className="text-black font-bold">New Video</div>
        </div>
      </button>
    </>
  );
};

const NewVideoButton = function () {
  return (
    <>
      <button
        type="button"
        className="p-2 bg-blue-500  text-black border-t-gray-300 rounded-md "
      >
        <div className="flex justify-center items-center gap-3">
          <img
            src=" https://cdn-icons-png.flaticon.com/512/748/748113.png"
            className="w-5 h-5"
            alt=""
          />
          <div className="text-black font-bold">New Video</div>
        </div>
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
  MainButton,
  NewVideoButton,
  MyVideoButton,
};
