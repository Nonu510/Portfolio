import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Error from './pages/error/error.jsx'

// Lazy load ProjectPage - not needed on initial page load
const ProjectPage = lazy(() => import('./components/project_page/project_page.jsx'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <p>Chargement...</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Header />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="*" element={<Error />} />                
                </Routes>
              </Suspense>
        <Footer />
      </Router>
  </StrictMode>,
)
