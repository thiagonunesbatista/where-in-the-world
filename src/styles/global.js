import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

body {
  background-color: ${({ theme }) => theme.primaryBackground};
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}
`

export default GlobalStyle
