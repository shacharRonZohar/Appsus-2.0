import React from 'react'
import Link from 'next/link'

import NavbarWrapper from '.'

const MailNavLink: React.FC<{ loc: string }> = ({ loc }) => {
  return (
    <li>
      <Link href={`/${loc}`}>
        <div className="bg-icon"></div>
        <span className="bg-icon capitalize">{loc}</span>
      </Link>
    </li>
  )
}

const MailNav: React.FC = () => {
  const locs = ['inbox', 'sent']
  return <NavbarWrapper locs={locs} NavLink={MailNavLink} />
}

export default MailNav
