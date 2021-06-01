import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import { usePublicContext } from 'contexts/PublicContext'

import PublicRoutes from 'routes/PublicRoutes'

import { darkTheme, GlobalCss, lightTheme } from 'styles'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const { theme } = usePublicContext()

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalCss />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <PublicRoutes />
    </ThemeProvider>
  )
}

export default App
