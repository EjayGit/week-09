import Link from "next/link";

export default function NavBar(){
    return(
        <div>
            <h1>Navbar</h1>
            <Link href={'/'}>Home</Link>
            <Link href={'/sign-in'}>Sign-In</Link>
            <Link href={'/sign-up'}>Sign-Up</Link>
        </div>
    )
}