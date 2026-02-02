import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Error from './pages/error/error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
        <Header />
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/error" element={<Error />} />
                  <Route path="*" element={<Error />} />                
              </Routes>
        <Footer />
      </Router>
  </StrictMode>,
)
