import React from 'react'

import MainNav from '../main-nav'

const AppHeader: React.FC = () => {
  return (
    <header className="flex justify-between">
      <h1>Appsus</h1>
      <MainNav />
    </header>
  )
}

export default AppHeader
