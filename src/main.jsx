import { StrictMode } from 'react'
import "@fontsource/teko"
import "@fontsource/teko/700.css"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
