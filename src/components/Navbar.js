import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { usePublicContext } from 'contexts/PublicContext'

import Container from './Container'

const Navbar = () => {
  const { handleTheme, theme } = usePublicContext()

  return (
    <StyledNavbar>
      <Container>
        <h1>
          <Link to='/'>Where in the world</Link>
        </h1>

        <SwitchThemeContainer onClick={handleTheme}>
          {theme === 'dark' ? <FaMoon size='16' /> : <FaRegMoon size='16' />}
          <p>Dark Mode</p>
        </SwitchThemeContainer>
      </Container>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  height: 80px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);

  ${({ theme: { primaryText, secondaryBackground } }) => ({
    background: secondaryBackground,
    color: primaryText
  })}

  h1 {
    line-height: 32px;
    font-size: 24px;
    font-weight: 800;
  }

  h1,
  p {
    transition: transform 0.1s linear;
  }

  h1:hover,
  p:hover {
    opacity: 0.5;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 16px;
      line-height: 21.82px;
    }
  }
`

const SwitchThemeContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  width: 112px;

  &:hover {
    opacity: 0.5;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 21.82px;
  }
`

export default Navbar
