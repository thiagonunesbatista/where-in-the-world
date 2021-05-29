import { ThemeProvider } from 'styled-components'

import { usePublicContext } from 'contexts/PublicContext'

import PublicRoutes from 'routes/PublicRoutes'

import { darkTheme, GlobalCss, lightTheme } from 'styles'

const App = () => {
  const { theme } = usePublicContext()

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalCss />
      <PublicRoutes />
    </ThemeProvider>
  )
}

export default App
