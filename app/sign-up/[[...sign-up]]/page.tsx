// app/sign-in/[[...sign-in]]/page.tsx
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return(
    <div className=' flex justify-center items-center h-screen flex-col'>
        <h1 className=' text-3xl font-bold py-4'>Siup in to RoadPulse</h1>
        <SignUp signInUrl='/sign-in'/>
    </div>
  ) 
}