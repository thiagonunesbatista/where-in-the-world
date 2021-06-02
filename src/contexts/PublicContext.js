import { createContext, useEffect, useContext, useState } from 'react'

const publicContext = createContext()

export const usePublicContext = () => useContext(publicContext)

export const PublicContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storagedTheme = localStorage.getItem('theme')

    if (storagedTheme) {
      setTheme(storagedTheme)
    }
  }, [])

  const handleTheme = () => {
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)

      return newTheme
    })
  }

  return (
    <publicContext.Provider value={{ loading, handleTheme, setLoading, theme }}>
      {children}
    </publicContext.Provider>
  )
}
