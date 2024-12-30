import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomeExm  from './home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeExm  />
  </StrictMode>,
)
