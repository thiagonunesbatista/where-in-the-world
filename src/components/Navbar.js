import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { usePublicContext } from 'contexts/PublicContext'

import Container from './Container'

const Navbar = () => {
  const { handleTheme } = usePublicContext()

  return (
    <StyledNavbar>
      <Oi>
        <h1>
          <Link to='/'>Where in the world</Link>
        </h1>

        <SwitchThemeContainer onClick={handleTheme}>
          <FaMoon />
          <p>Dark Mode</p>
        </SwitchThemeContainer>
      </Oi>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  height: 80px;
  width: 100%;

  ${({ theme: { primaryText, secondaryBackground } }) => ({
    background: secondaryBackground,
    color: primaryText
  })}

  h1 {
    line-height: 32px;
    font-size: 24px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`

const SwitchThemeContainer = styled.button`
  display: flex;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
`

const Oi = styled(Container)``

export default Navbar
