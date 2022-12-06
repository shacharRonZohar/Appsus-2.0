import MainNav from './main-nav'

import type React from 'react'

const AppHeader: React.FC = () => {
  return (
    <header className="app-header">
      <h1>Appsus</h1>
      <MainNav />
    </header>
  )
}

export default AppHeader
