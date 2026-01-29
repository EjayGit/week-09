//TODO: render the sign-in page
//- Use Clerk component
 
export default function SignUpPage() {
  return (
    <>
      {/* Clerk component */}
      <form>
        <input type="text" name="nickname" />
        <textarea type="text" name="bio" />
        <input type="number" name="age" />
      </form>
    </>
  );
}