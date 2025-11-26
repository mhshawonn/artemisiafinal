import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import AgentsPage from './pages/AgentsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

const pathname = window.location.pathname
const isAgentsPage = pathname === '/agents'
const isProjectsPage = pathname === '/projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAgentsPage ? <AgentsPage /> : isProjectsPage ? <ProjectsPage /> : <App />}
  </StrictMode>,
)
