'use client'

const  SignInButton = function () {
  return (
    <>
      <button className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Login
      </button>
    </>
  );
}

const  GoogleInButton = function () {
  return (
    <>
      <button className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Login with Google
      </button>
    </>
  );
}


export {SignInButton, GoogleInButton}