import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './Fonts/Pacifico/Pacifico-Regular.ttf'
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Pacifico&display=swap" rel="stylesheet"></link>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
