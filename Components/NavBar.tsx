import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavBar.module.css'

export default function NavBar() {
  const router = useRouter()
  console.log({ router })

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={`${styles.link} ${router.pathname === '/' ? styles.active : undefined}`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={[styles.link, router.pathname === '/about' ? styles.active : undefined].join(' ')}>about</a>
      </Link>
    </nav>
  )
}
