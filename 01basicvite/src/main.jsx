import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import YouFunction from './YouFunction.jsx'


createRoot(document.getElementById('root')).render(
   <>
    <App />
    <YouFunction/>
  </>
)
