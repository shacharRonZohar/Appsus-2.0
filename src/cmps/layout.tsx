import React from 'react'
import { useRouter } from 'next/router'

import AppHeader from './app-header'
import MailSideNav from '../cmps/mail-sidenav'

import type { LayoutFC } from '../types/utils'

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
      <main>{children}</main>
    </>
  )
}

export default Layout
