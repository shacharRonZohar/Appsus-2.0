import Link from 'next/link'

const MainNav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/mail">Mail</Link>
        </li>
        <li>
          <Link href="/keep">Keep</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
