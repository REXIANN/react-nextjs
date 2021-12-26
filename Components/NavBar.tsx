import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  console.log({ router })

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'blue' : 'red' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === '/' ? 'blue' : 'red' }}>about</a>
      </Link>
    </nav>
  )
}
