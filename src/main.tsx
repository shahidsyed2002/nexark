import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { ColorSchemeProvider } from './context/ColorSchemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorSchemeProvider>
        <App />
      </ColorSchemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
