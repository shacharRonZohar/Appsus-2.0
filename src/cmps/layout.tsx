import React from 'react'
import { useRouter } from 'next/router'

import AppHeader from './app-header'
import MainNav from './main-nav'
import MailSidebar from './mail/mail-sidebar'

import type { LayoutFC } from '../types/utils'

const Layout: LayoutFC = ({ children }) => {
  // const { pathname } = useRouter()
  // const getSideBar = () => {
  //   switch (pathname) {
  //     case '/mail':
  //       return <MailSidebar />
  //     case '/keep':
  //       return <div>Keep Sidenav</div>
  //     default:
  //       return null
  //   }
  // }
  return (
    <div className="container min-h-screen grid">
      <AppHeader />
      {/* {getSideBar()} */}
      <div>{children}</div>
      <MainNav />
    </div>
  )
}

export default Layout
