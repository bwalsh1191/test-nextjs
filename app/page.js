import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'


export default async function Home() {

  const supabase = createServerComponentSupabaseClient({headers,cookies})
  
  const {data: testData} = await supabase.from("listings").select();


  return (
    <div>
      
      <h1>Welcome!</h1>
      <p>Check out our posts!</p>
      <pre>{JSON.stringify(testData,null,2)}</pre>
    </div>
  )
}


