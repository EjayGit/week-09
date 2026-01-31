'use client';

import Link from 'next/link';
 
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