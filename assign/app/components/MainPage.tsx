"use client";
import React, { useState } from "react";
import { MainButton, NewVideoButton } from "./Button";
import { useRouter } from "next/navigation";
import User from "./User";
import Notification from "../(auth)/notification/page";

interface MainPageProps {}

const cards = [
  {
    src: "https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/652039811875222115d77744_laptop-over-a-table.jpeg",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.techsmith.com/blog/wp-content/uploads/2021/10/Customer-Camtasia-1-1024x481.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.smartinsights.com/wp-content/uploads/2018/12/Wirecast.png",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.techsmith.com/blog/wp-content/uploads/2017/02/video_creation_basics_production_board.jpg",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19vJBRzuRIuk590LUvvWn5Xzk0FUtWG_sRg&usqp=CAU",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dVKHacaZCzC5-IimCFDxtF_Y5ROWBFMowi6JYyqfqlLeeNIMU4RLlmjVXwxmUY0weu8&usqp=CAU",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://i0.wp.com/itbackups.sgp1.digitaloceanspaces.com/dekochiCDN/uploads/2022/11/15060010/motion-graphics-design-video-production.jpg?resize=770%2C433&ssl=1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRfQWdis-AQDDtooBHjFuMo_rJT2SSfKpbQ&usqp=CAU",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
];
const MainPage: React.FC<MainPageProps> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setisNotificationOpen] = useState(false);
  const handleOnClickUser = () => {
    setisNotificationOpen(false); // Close notification when opening user
    setIsOpen((prev) => !prev);
  };

  const handleOnClickNotification = () => {
    setIsOpen(false); // Close user when opening notification
    setisNotificationOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-auto h-auto w-auto  items-center justify-center bg-gray-100">
        <div className="p-8 rounded-lg shadow-md bg-white">
          {/* User navbar  */}
          <div className="flex">
            <div>
              <h1 className="text-2xl font-semibold">Project</h1>
            </div>

            <div className="flex flex-wrap justify-center items-center ml-auto gap-10">
              <MainButton />
              <button onClick={handleOnClickNotification}>
                <img
                  className="rounded-full p-1 w-10 h-10 border-2 border-gray-200"
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/359/770/small/bell-icon-free-vector.jpg"
                  alt="userImg"
                />
              </button>
              <button onClick={handleOnClickUser}>
                <img
                  className="rounded-full w-10 h-10"
                  src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                  alt="userImg"
                />
              </button>
            </div>
          </div>
          <br />
          <hr />
          {/* new video button and myVideo button */}
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-3">
              <button>
                <div className="flex flex-row items-center underline">
                  <img
                    src="https://www.svgrepo.com/download/335062/dropdown.svg"
                    className="w-5 h-5"
                    alt=""
                  />
                  <div className="text-black font-bold">New Video</div>
                </div>
              </button>
            </div>

            <div className="flex justify-center items-center ml-auto gap-10">
              <div className="ml-64 mb-44">
                {isNotificationOpen && <Notification />}
              </div>

              <div className="pr-48 mb-36">{isOpen && <User />}</div>
              {/* </div> */}
              <NewVideoButton />
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* new video generation advertisement */}
          <div className="flex flex-col gap-4 lg:pl-20 lg:pr-20 m-4">
            <div className="flex items-center justify-center flex-col text-center gap-3 ">
              <div>
                <img
                  className="rounded-full w-14 h-14"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCqouKSPvXJveSW0-zzXtUsuv9Tnlbhd1vQvlLf1HDhgat3RfjqcwGpT-jYxZPXM4q7g&usqp=CAU"
                  alt="userImg"
                />
              </div>
              <div className="font-bold text-lg">Create your first Video</div>
              <div className="flex-wrap">
                Click on the below button to kickstart your video creation
                journey with Video Fast
              </div>
              <div>
                <NewVideoButton />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex justify-between items-center">
            <div className="underline font-bold text-xl">Templates</div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-lg bg-gray-200 p-3">All</div>
              <div className="rounded-lg outline outline-offset-0 outline-gray-300  p-3">
                Landscape Video (16:9)
              </div>
              <div className="rounded-lg outline outline-offset-0 outline-gray-300 p-3">
                Potrait Video (9:16)
              </div>
            </div>
          </div>
          <br /> <br />
          {/* cart  */}
          <div className="flex flex-wrap justify-between gap-2">
            {cards.map((card, index) => (
              <ul key={index} className="w-1/5">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-36 object-cover mb-4 rounded-lg"
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    Card {index + 1}
                  </h2>
                  <p>{card.content}</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
