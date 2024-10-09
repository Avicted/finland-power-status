import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// @Note(Victor): Removed strict mode to not create two request for each fetch, this triggers the 429 too many requests error (rate limiting)
createRoot(document.getElementById('root')!).render(
  <App />
)
