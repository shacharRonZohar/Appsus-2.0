import React from 'react'
import AppHeader from './app-header'

import type { LayoutFC } from '../types/utils'
import { useRouter } from 'next/router'
import MailSideNav from '../cmps/mail-sidenav'

const Layout: LayoutFC = ({ children }) => {
  const { pathname } = useRouter()
  const getSideBar = () => {
    switch (pathname) {
      case '/mail':
        return <MailSideNav />
      case '/keep':
        return <div>Keep Sidenav</div>
      default:
        return null
    }
  }
  return (
    <>
      <AppHeader />
      {getSideBar()}
      <div>{children}</div>
    </>
  )
}

export default Layout
