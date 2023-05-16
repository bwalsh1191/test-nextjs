import Image from 'next/image'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

import {redirect} from "next/navigation"
import Logout from '../auth/components/Logout'

export default async function AdminPage() {

  const supabase = createServerComponentSupabaseClient({headers,cookies})

  const {data: activeSession} = await supabase.auth.getSession()

  if(!activeSession.session){
    return redirect("/")
  }

  const {data: userInfo} = await supabase.from("profile").select();
  const {data: myPosts} = await supabase.from('posts').select().eq('userId', userInfo.uid);
  
  // returns "Error: Cannot read properties of null (reading 'length')"
  let postCount = myPosts?.length

  return (
    <div>
      
      <h1> Welcome to your admin page!</h1>
      <h1>Looks like you are {userInfo?.profile_name ?? null}</h1>
      <h2>Total Posts: {postCount}</h2>
      <pre>{JSON.stringify(myPosts,null,2)}</pre>
      <Logout />
    </div>
  )
}
