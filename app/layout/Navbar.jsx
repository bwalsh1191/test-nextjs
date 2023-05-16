"use client";
import Link from "next/link";
import { useSupabase } from "@/app/supabase-provider";
import Logout from "../auth/components/Logout";

export default async function Navbar() {
  const { supabase } = useSupabase();
  const { data } = await supabase.auth.getSession();

//   console.log(data);
  return (
    <div className="bg-red-500">
      {data.session ? (
        <Logout/>
      ) : (
        <p>
          <Link href="/auth">Sign In</Link>
        </p>
      )}
    </div>
  );
}
