//TODO: render users' data
//- READ user's data from the table
//- READ user's posts: render a list of user's personal posts

//Tips
//- The Clerk userId does NOT exist until the user signs up --> show sign-up and sign-in buttons first thing (e.g. your Home page can be public, the rest of routes are protected)
import {currentUser} from '@clerk/nextjs/server'

//Resources:
// https://clerk.com/docs/reference/nextjs/app-router/current-user
// https://clerk.com/docs/reference/nextjs/app-router/auth

export default async function ProfilePage() {
  
  const user = await currentUser()
  
  //db queries to GET data from the tables
  return (
    <>
      <h1>User&apos;s info</h1>
      <h1>User&apos;s posts</h1>
      <div>Hello {user?.username}</div>
      <div>We have got your {user?.primaryEmailAddress}</div>
      <div>...your {user?.primaryPhoneNumber}</div>
      <div>Your unique id is {user?.id}</div>
      <div>That's right, we have labelled you too. Mwahaha...</div>
    </>
  );
}