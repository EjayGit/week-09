//TODO: render a form to INSERT post data into the posts table
//- We also need to insert the userId into the posts table, make sure you have some SQL that READS the userId from the user's table OR use the auth() function from clerk to get the userId

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { auth } from '@clerk/nextjs/server';
import '@/components/new-post.css'

export default async function NewPost({params}) {
  const data = await params;
  const username = data.username;
  const data2 = await auth();
  const userId = data2.userId;

  async function handleSubmit(rawFormData){
    "use server";
    console.log(rawFormData);
    const formValues = { message: rawFormData.get('post')}
    console.log(formValues.message);
    db.query(`INSERT INTO pboard (message, uid) VALUES ($1, $2)`,[
      formValues.message,
      userId
    ]);
    redirect(`/profile/${username}`);
  }
  
  return (
    <>
      <h1 className={'heading'}>Create your post...</h1>
      <form className={'form'} action={handleSubmit}>
        <textarea className={'textarea'} type="text" name='post' rows="5" cols="40" placeholder="Post" required/>
        <button className={'submitBtn'}>Submit</button>
      </form>
    </>
  );
}