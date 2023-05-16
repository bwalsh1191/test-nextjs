// "use client"

import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation';

import Auth from "./components/Auth";

export default async function page () {


    const supabase = createServerComponentSupabaseClient({headers,cookies})
    const {data} = await supabase.auth.getSession()

    if(data.session){
        return redirect("/admin")
    }else{
      return (
        <Auth />
      )
    }
};

