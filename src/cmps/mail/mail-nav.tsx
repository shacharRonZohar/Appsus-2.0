import React from 'react'
import Link from 'next/link'
const MailNav: React.FC = () => {
  const [navItems, setNavItems] = React.useState([
    { label: 'Inbox', path: '/mail' },
    { label: 'Starred', path: '/mail/starred' },
    { label: 'Sent', path: '/mail/sent' },
    { label: 'Drafts', path: '/mail/drafts' },
  ])

  return (
    <nav>
      <ul>
        {navItems.map(item => (
          <li key={item.label}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MailNav
