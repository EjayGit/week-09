//TODO: render users' data
//- READ user's data from the table
//- READ user's posts: render a list of user's personal posts

//Tips
//- The Clerk userId does NOT exist until the user signs up --> show sign-up and sign-in buttons first thing (e.g. your Home page can be public, the rest of routes are protected)
import { db } from '@/utils/dbConnection';
import {currentUser} from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'

//Resources:
// https://clerk.com/docs/reference/nextjs/app-router/current-user
// https://clerk.com/docs/reference/nextjs/app-router/auth


export default async function ProfilePage() {
  const {userId} = await auth()
  
  // Get user data.
  const user = await currentUser()

  // Get posts.
  const {rows: userrows} = await db.query(`SELECT * from uboard WHERE id = $1 ORDER BY id DESC LIMIT 20`,[
    userId
  ]);
  const userData = userrows[0];
  //console.log(rows[0]);

  const {rows: postrows} = await db.query(`SELECT * FROM pboard WHERE uid = $1`,[
    userId
  ]);
  const postData = postrows[0];
  //console.log(postData.message);

  return (
    <>
      <h1>User&apos;s info</h1>
      
      <div>Hello {userData.username}</div>
      <div>We have got your {user?.emailAddresses[0].emailAddress}</div>
      <div>Your age, which is {userData.age}</div>
      <div>Your location, which is {userData.location}</div>
      <div>And your bio: {userData.bio}</div>
      <div>Your unique id is {user?.id}</div>
      <div>That's right, we have labelled you too. Mwahaha...</div>

      <h2>Posts</h2>
      <div>{postData.message}</div>
      
    </>
  );
}
