import Link from 'next/link'

export default function GlobalNotFound(){
    return(
        <h1>Not found! Go back <Link href={'/'}>Home</Link></h1>
    )
}