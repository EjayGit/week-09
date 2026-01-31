//TODO: render users' data
//- READ user's data from the table
//- READ user's posts: render a list of user's personal posts

//Tips
//- The Clerk userId does NOT exist until the user signs up --> show sign-up and sign-in buttons first thing (e.g. your Home page can be public, the rest of routes are protected)
import { db } from '@/utils/dbConnection';
import {currentUser} from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'
import '@/components/username.css'

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
  console.log(postrows);
  //console.log(postData.message);

  return (
    <>
      <h1>User&apos;s info</h1>
      
      <div className={'profile-item'}>Hello {userData.username}</div>
      <div className={'profile-item'}>We have got your {user?.emailAddresses[0].emailAddress}</div>
      <div className={'profile-item'}>Your age, which is {userData.age}</div>
      <div className={'profile-item'}>Your location, which is {userData.location}</div>
      <div className={'profile-item'}>And your bio: {userData.bio}</div>
      <div className={'profile-item'}>Your unique id is {user?.id}</div>
      <div className={'profile-item'}>That's right, we have labelled you too. Mwahaha...</div>

      <h2 className={''}>Posts</h2>
      {postrows.map((post) => {
        return(
          <div className={'post-items'} key={post.id}>
            <p className={'post-item'}>{post.message}</p>
          </div>
        )
      })}
      {/* <div>{postData.message}</div> */}
      
    </>
  );
}
