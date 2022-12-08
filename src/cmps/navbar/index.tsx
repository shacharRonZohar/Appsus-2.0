const NavbarWrapper: React.FC<{
  locs: string[]
  NavLink: React.FC<{ loc: string }>
}> = ({ locs, NavLink }) => {
  return (
    <nav>
      <ul className="flex flex-col">
        {locs.map(loc => (
          <NavLink key={loc} loc={loc} />
        ))}
      </ul>
    </nav>
  )
}

export default NavbarWrapper
