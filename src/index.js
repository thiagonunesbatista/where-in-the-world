import React from 'react'
import ReactDOM from 'react-dom'

import { PublicContextProvider } from 'contexts/PublicContext'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <PublicContextProvider>
      <App />
    </PublicContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
