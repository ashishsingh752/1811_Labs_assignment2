
import React from 'react';
import { SignInButton, GoogleInButton } from './Button';

interface SignInProps {}

const SigninComponent: React.FC<SignInProps> = () => {
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="px-8 py-6 bg-white rounded-lg shadow-md text-left sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h3 className="text-2xl font-bold text-center">Video fast</h3>
        <p className="text-gray-700 text-base mt-4 mb-6">
          Let's get started by creating your account
        </p>
        <div className='p2-4'>

        <GoogleInButton/>
        </div>
        <div className="w-full flex items-center justify-between mt-4">
          <hr className="w-full bg-gray-300 border-0" />
          <span className="text-sm text-gray-500 px-2">OR</span>
          <hr className="w-full bg-gray-300 border-0" />
        </div>
        <div className="mt-6">
          <label
            className="text-sm text-gray-700 font-medium block mb-2"
            htmlFor="username"
          >
            Enter name *
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
            placeholder="lets.join@audionotes.com"
          />
        </div>
        <div className="mt-6">
          <label
            className="text-sm text-gray-700 font-medium block mb-2"
            htmlFor="password"
          >
            Set password *
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-700 ml-2">
              Remember Me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline focus:outline-none">
            Forgot Password?
          </a>
        </div>
        {/* <button className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-8">
          Login
        </button> */}
        <div className='pt-4'>

        <SignInButton />
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline focus:outline-none">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninComponent;
