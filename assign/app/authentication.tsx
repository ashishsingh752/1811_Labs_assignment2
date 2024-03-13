'use client'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";

export default async function CheckAuthentication(Components: any) {
  const router = useRouter();
  return async function CheckAuthentication(props: any) {
    const cookieStore = cookies();
    console.log(cookieStore);
    const supabase = createServerComponentClient({
      cookies: () => cookieStore,
    });
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // console.log(user);

    if (!user) {
      return redirect("/");
    }
    return <Components {...props} />;
  };
}
