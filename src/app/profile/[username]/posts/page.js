import { redirect } from "next/navigation"
import {currentUser} from '@clerk/nextjs/server'
import {db} from '@/utils/dbConnection'
import { auth } from '@clerk/nextjs/server'

export default async function Posts(){
    const {userId} = await auth();
    const id = userId;
    //console.log(auth());
    const {rows} = await db.query(`SELECT * FROM pboard WHERE uid = $1`,[
        id
    ]);
    
    return(
        <>
            <h1>User&apos;s posts</h1>

            {rows.map((post) => {
            return(
                <div key={post.id}>
                <p>{post.message}</p>
                </div>
            )
            })}
        </>
    )
}