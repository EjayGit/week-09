'use client' // Error boundaries must be Client Components
 
export default function GlobalError() {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong! Please return <Link href={'/'}>Home</Link> and try again.</h2>
      </body>
    </html>
  )
}