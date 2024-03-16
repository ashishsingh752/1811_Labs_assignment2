"use client";
import { useEffect, useState } from "react";
import { CrossButton } from "./Button";
import Credit from "./Credit";
import {useRouter} from "next/navigation";
import { User } from "@supabase/supabase-js";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";


export default  function UserAccount() {
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    }).catch(error => {
      // Handle error
      console.error("Error fetching user:", error);
    });
  }, []);
  
  const handleOnClickedUpgradePlan = () => {
    setIsClicked(prev => !prev);
  };

  useEffect(() => {
    if (isClicked) {
      router.push('/account/credit');
    }
  }, [isClicked]);
  // console.log(user?.user_metadata?.full_name);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
          <div className="w-full max-w-2xl p-8 rounded-md shadow-md bg-white">
            <div className="flex">
              <div>
                <h1 className="text-2xl font-bold mb-2">Account</h1>
                <p className="mb-2">
                  Choose the avatar that best describes your use case describes
                  your
                </p>
              </div>
              <div className="flex ml-auto">
                <CrossButton />
              </div>
            </div>

            <br />
            <hr />
            <br />
            <div className="flex flex-col gap-6">
              {/* User name  */}
              <div className="flex flex- items-center">
                <label
                  htmlFor="displayName"
                  className="w-1/3 text-sm text-gray-500 font-"
                >
                  Display Name
                  <p className="mt-1 font-semibold">{user?.user_metadata?.full_name || "Display Name not found"}</p>
                </label>
              </div>

              {/* User email  */}
              <div className="flex  justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="emailAddress"
                    className="text-sm text-gray-500 font-medium"
                  >
                    Email Address
                    <p className="mt-1 font-semibold">
                      {user?.user_metadata?.email || 'Email Not found'}
                    </p>
                  </label>
                </div>
              </div>

              {/* User email  */}
              <div className="flex  justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="emailAddress"
                    className="text-sm text-gray-500 font-medium"
                  >
                    Current Plan
                    <p className="mt-1 font-semibold">Free</p>
                  </label>
                </div>
                <div>
                  {" "}
                  <button
                    onClick={handleOnClickedUpgradePlan}
                    className=" bg-pink-50 p-3 rounded-md"
                  >
                    Upgrade Plan <span className="ml-1">&#8594;</span>{" "}
                  </button>
                </div>
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
            </div>
          </div>
        </div>
        {/* <div>{isClicked ?  router.push('/credit') : "Ashish"}</div> */}
      </div>
    </>
  );
};

