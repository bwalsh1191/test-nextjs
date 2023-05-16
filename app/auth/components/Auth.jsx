"use client"
import { useSupabase } from "@/app/supabase-provider"


export default function Auth () {

    const {supabase} = useSupabase()

    const signIn = () =>{
        supabase.auth.signInWithPassword({
            email: "test@test.com",
            password: "password123",
          })

    }

      return (
        <div>
          <h1>Login Page!</h1>
          <button onClick={signIn}>Sign In</button>
        </div>
      )
};
