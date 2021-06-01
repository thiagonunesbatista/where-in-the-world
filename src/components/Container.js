import styled from 'styled-components'

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1008px;

  @media (max-width: 1100px) {
    padding: 0 16px;
  }
`

export default Container
