import Image from "next/image";
import SigninComponent from "./signin/page";
import UserAccount from "./components/UserAccount";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <MainPage />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}
