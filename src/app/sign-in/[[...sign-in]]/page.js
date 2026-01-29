//TODO: render the sign-in page
//- Use Clerk component
import {SignIn} from '@clerk/nextjs'
 
export default function SignUpPage() {
  return (
    <>
        <h1>Sign in page</h1>
        <SignIn/>
        <form>
            <input type="text" name="nickname" />
            <textarea type="text" name="bio" />
            <input type="number" name="age" />
        </form>
    </>
  );
}