import { useEffect } from 'react'

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClick = event => {
      if (!ref.current && ref.current?.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, handler])
}
