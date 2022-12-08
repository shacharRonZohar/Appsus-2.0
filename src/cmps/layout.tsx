import React from 'react'

import AppHeader from './app-header'
import MainNav from './navbar/main-nav'

import type { LayoutFC } from '../types/utils'

const Layout: LayoutFC = ({ children }) => {
  return (
    <div className="container min-h-screen min-w-full grid grid-cols-main-layout grid-rows-main-layout">
      <AppHeader />
      <MainNav />
      <div>{children}</div>
    </div>
  )
}

export default Layout
