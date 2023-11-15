import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-20'>
      <h1>About Page</h1>
      <Link className="m-20 bg-green-500 text-black font" href={"/dashboard"}>
        Go To Dashboard
      </Link>
    </main>
  )
}
