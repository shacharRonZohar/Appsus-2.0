import Link from 'next/link'
import React from 'react'

import NavbarWrapper from '.'

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
  const locs = ['home', 'mail', 'keep', 'about']
  return <NavbarWrapper locs={locs} NavLink={MainNavLink} />
}

export default MainNav
