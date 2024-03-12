import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export default async function CheckAuthentication() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  if (!user) {
  }

  if (!user) {
    return (
      <main>
        <button>You'r not Login? click here to login.</button>
      </main>
    );
  }

  //   if (user) {
  //     redirect("http://localhost:3000/");
  //   }
}
