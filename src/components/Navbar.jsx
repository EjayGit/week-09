import Link from "next/link";
import { auth, currentUser } from '@clerk/nextjs/server';
import { SignedIn, SignedOut } from "@clerk/nextjs";
import DropDownMenu from '@/components/DropDownMenu'
import './dropdownmenu.css'

export default async function SignedOutNavbar(){
    let username = '';

    if (auth() != null){
        const user = await currentUser();
        username = user?.username;
    }

    return(
        <div className={'flex flex-col items-center m-4'}>
            <DropDownMenu />
        </div>
    )
}