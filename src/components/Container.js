import styled from 'styled-components'

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1190px;
`

export default Container
