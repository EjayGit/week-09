import { db } from "@/utils/dbConnection"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import '@/components/profile.css'

export default function CreateProfile(){

    async function handleSubmit(rawFormData){
        "use server";
        const user = await currentUser();
        const id = user?.id;
        const username = user?.username;
        //console.log(rawFormData);
        //console.log(id);
        const formValues = {
            id: id,
            username: username,
            location: rawFormData.get("location"),
            age: rawFormData.get("age"),
            bio: rawFormData.get("bio"),
        }
        //console.log(formValues);
        db.query('INSERT INTO uboard (id, username, location, age, bio) VALUES ($1, $2, $3, $4, $5)',[
            id,
            username,
            formValues.location,
            formValues.age,
            formValues.bio
        ]);
        redirect(`/profile/${username}`)
    }
    return(
        <>
            <h1 className={'heading'}>Profile creation page</h1>
            <form className={'form'} action={handleSubmit}>
                <label htmlFor="location">Location: </label>
                <input className={'form-field'} type="text" name="location" required/>
                <label htmlFor="age">Age: </label>
                <input className={'form-field'} type="number" name="age" required/>
                <label htmlFor="bio">User bio: </label>
                <textarea className={'form-field'} type="text" name="bio" required />
                <button className={'submitBtn'}>Submit</button>
            </form>
        </>
    )
}