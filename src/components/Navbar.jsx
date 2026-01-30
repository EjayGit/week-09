import Link from "next/link";
import { auth, currentUser } from '@clerk/nextjs/server';
import { SignedOut } from "@clerk/nextjs";

export default async function SignedOutNavbar(){
    let username = '';

    if (auth() != null){
        const user = await currentUser();
        username = user?.username;
    }

    return(
        <div>
            <h1>Navbar</h1>
            <Link href={'/'}>Home</Link>
            <SignedOut>
                <Link href={'/sign-in'}>Sign-In</Link>
                <Link href={'/sign-up'}>Sign-Up</Link>
            </SignedOut>
            <Link href={`/profile/${username}`}>Profile</Link>
        </div>
    )
}