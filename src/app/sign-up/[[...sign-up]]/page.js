//TODO: render a sign-up page
//- Clerk component
//- A form to collect other user data (bio, nickname, location, interests...)
//- Insert user's data into users table, so we can render it in the profile page
import {SignUp} from '@clerk/nextjs';
import {currentUser} from '@clerk/nextjs/server'

//Extra: create another nested route called createProfile where the user cqan complete their personal info as a second step in the sign-up process

export default function SignUpPage() {

  const {firstName} = currentUser()

  return (
    <>
        <h1>Sign up page</h1>
        <SignUp/>
    </>
  );
}