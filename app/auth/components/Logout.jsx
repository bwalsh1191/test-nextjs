"use client"

import { useSupabase } from "@/app/supabase-provider"

export default function Logout () {

    const {supabase} = useSupabase()
    const signOut = () =>{
      supabase.auth.signOut()
    }
  return (
    <div>
      <button onClick={signOut}>Logout</button>
    </div>
  )
};
