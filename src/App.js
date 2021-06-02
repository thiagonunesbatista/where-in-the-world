import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import Loader from 'components/Loader'

import { usePublicContext } from 'contexts/PublicContext'

import PublicRoutes from 'routes/PublicRoutes'

import { darkTheme, GlobalCss, lightTheme } from 'styles'

const App = () => {
  const { loading, theme } = usePublicContext()

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalCss loading={loading} />
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
      {loading && <Loader />}
    </ThemeProvider>
  )
}

export default App
