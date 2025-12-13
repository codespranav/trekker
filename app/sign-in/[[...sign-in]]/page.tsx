// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return(
    <div className=' flex justify-center items-center h-screen flex-col'>
        <h1 className=' text-3xl font-bold py-4'>Sign in to RoadPulse</h1>
        <SignIn signUpUrl='/sign-up'/>
    </div>
  ) 
}