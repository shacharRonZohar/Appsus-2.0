import Link from 'next/link'

const MainNavLink: React.FC<{ loc?: string }> = ({ loc = '' }) => {
  return (
    <li>
      <Link href={`/${loc}`}>
        <div className="bg-icon"></div>
        <span className="bg-icon capitalize">{loc || 'home'}</span>
      </Link>
    </li>
  )
}

const MainNav: React.FC = () => {
  return (
    <nav className="row-span-full">
      <ul className="flex flex-col">
        <MainNavLink />
        <MainNavLink loc="mail" />
        <MainNavLink loc="keep" />
        <MainNavLink loc="about" />
      </ul>
    </nav>
  )
}

export default MainNav
