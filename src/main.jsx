import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'; // or './index.css' depending on your file
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
