"use client";
import React, { useEffect, useState } from "react";
import { MainButton, NewVideoButton } from "./Button";
import { useRouter } from "next/navigation";
import UserDetail from "./UserDropdown";
import Notification from "../(auth)/notification/page";
import Image from "next/image";
import { User } from "@supabase/supabase-js";

import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";

interface MainPageProps {}

const cards = [
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    address:
      "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  // Add more card data as needed
];

const MainPage: React.FC<MainPageProps> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isNotificationOpen, setisNotificationOpen] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    supabase.auth
      .getUser()
      .then(({ data: { user } }) => {
        setUser(user);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching user:", error);
      });
  }, []);

  const handleOnClickUser = () => {
    setisNotificationOpen(false); // Close notification when opening user
    setIsOpen((prev) => !prev);
  };

  const handleOnClickNotification = () => {
    setIsOpen(false); // Close user when opening notification
    setisNotificationOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 max-w-7xl w-full">
        {/* User navbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Project</h1>
          <div className="flex items-center gap-4">
            <MainButton />
            <button onClick={handleOnClickNotification}>
              <Image
                className="rounded-full p-1 w-10 h-10 border-2 border-gray-200"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/359/770/small/bell-icon-free-vector.jpg"
                width={20}
                height={20}
                alt="Notification"
              />
            </button>
            <button onClick={handleOnClickUser}>
              <Image
                className="rounded-full w-10 h-10"
                src={
                  user?.user_metadata?.picture ||
                  "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
                }
                width={60}
                height={60}
                alt="User"
              />
            </button>
          </div>
        </div>
        <hr />

        {/* New video button and myVideo button */}
        <div className="flex flex-row-reverse mr-[22rem]  mb-8">
            <div className="">{isNotificationOpen && <Notification />}</div>
            <div className="">{isOpen && <UserDetail />}</div>


          {/* <button className="flex items-center underline">
            <Image
              src="https://www.svgrepo.com/download/335062/dropdown.svg"
              width={40}
              height={40}
              alt="New Video"
            />
            <div className="text-black font-bold">New Video</div>
          </button> */}
         
        </div>
        <br />
        <br />
        {/* New video generation advertisement */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div>
            <Image
              className="rounded-full w-14 h-14"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCqouKSPvXJveSW0-zzXtUsuv9Tnlbhd1vQvlLf1HDhgat3RfjqcwGpT-jYxZPXM4q7g&usqp=CAU"
              width={20}
              height={20}
              alt="User"
            />
          </div>
          <div className="font-bold text-lg text-center">
            Create your first Video
          </div>
          <div className="text-center">
            Click on the below button to kickstart your video creation journey
            with Video Fast
          </div>
          <NewVideoButton />
        </div>
        <br />
        <br />
        {/* Templates */}
        <div className="flex justify-between items-center mb-8">
          <div className="underline font-bold text-xl">Templates</div>
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-gray-200 p-3">All</div>
            <div className="rounded-lg outline outline-offset-0 outline-gray-300  p-3">
              Landscape Video (16:9)
            </div>
            <div className="rounded-lg outline outline-offset-0 outline-gray-300 p-3">
              Portrait Video (9:16)
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <Image
                src={card.address}
                alt={card.alt}
                className="w-full h-36 object-cover mb-4 rounded-lg"
                width={200}
                height={200}
              />
              <h2 className="text-xl font-semibold mb-2">Card {index + 1}</h2>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
