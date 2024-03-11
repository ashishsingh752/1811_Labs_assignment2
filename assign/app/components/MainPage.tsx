import React from "react";
import { MainButton, NewVideoButton } from "./Button";
import { link } from "fs";

interface MainPageProps {}

const cards = [
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
  {
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdoraemon%2Fimages%2F7%2F71%2FC0E297DC-08AE-43E6-841D-41E95B2FC8D0.jpeg%2Frevision%2Flatest%3Fcb%3D20181218213552%26path-prefix%3Den&tbnid=uD3FFFbWEpk4ZM&vet=12ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fdoraemon.fandom.com%2Fwiki%2FShizuka_Minamoto&docid=ylQTu8pvnNqOWM&w=1524&h=982&q=shizuka&ved=2ahUKEwicgrrgiuyEAxVn4TgGHVM5ARAQMygCegQIARB1",
    alt: "photo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed ea consequatur impedit consectetur magni adipisci odit nihil enim qui.",
  },
];
const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className="flex flex-col items-center  bg-gray-100">
      <div className=" p-8 rounded-lg shadow-md bg-white">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-semibold">Project</h1>
          </div>

          <div className="flex flex-wrap justify-center items-center ml-auto gap-10">
            <MainButton />
            <img
              className="rounded-full p-1 w-10 h-10 border-2 border-gray-200"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/359/770/small/bell-icon-free-vector.jpg"
              alt="userImg"
            />
            <img
              className="rounded-full w-10 h-10"
              src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
              alt="userImg"
            />
          </div>
        </div>
        <br />
        <hr />
        <br />
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
            <NewVideoButton />
          </div>
        </div>
        <br />
        <br />
        <br />
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
              Click on the below button to kickstart your video creation journey
              with Video Fast
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
        
        <div className="flex flex-wrap justify-between gap-2">
          {cards.map((card, index) => (
            <li key={index} className="w-1/5">
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-36 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">Card {index + 1}</h2>
                <p>{card.content}</p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
