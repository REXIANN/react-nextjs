import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : undefined }>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : undefined }>about</a>
      </Link>
      <style jsx>{`
        nav { 
          background-color: red;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
