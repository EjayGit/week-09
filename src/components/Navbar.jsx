import Link from "next/link";
import { auth, currentUser } from '@clerk/nextjs/server';
import { SignedIn, SignedOut } from "@clerk/nextjs";
import DropDownMenu from '@/components/DropDownMenu'

export default async function SignedOutNavbar(){
    let username = '';

    if (auth() != null){
        const user = await currentUser();
        username = user?.username;
    }

    return(
        <div>
            <h1>Navbar</h1>
            <DropDownMenu/>
        </div>
    )
}