import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import ProjectPage from './components/project_page/project_page.jsx'
import Error from './pages/error/error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Header />
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/project/:id" element={<ProjectPage />} />
                  <Route path="/error" element={<Error />} />
                  <Route path="*" element={<Error />} />                
              </Routes>
        <Footer />
      </Router>
  </StrictMode>,
)
