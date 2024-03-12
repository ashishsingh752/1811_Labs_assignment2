import Image from "next/image";
import SigninComponent from "./signin/page";
import UserAccount from "./components/UserAccount";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { handleOnClickDirectToHome } from "./components/Button";

export default async function Home() {
  // const cookieStore = cookies();
  // const supabase = createServerComponentClient({ cookies: () => cookieStore });
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // console.log(user);

  return (
    <>
      <MainPage />
    </>
  );
}
