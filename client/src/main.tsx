import { StrictMode } from 'react'
import { StateProvider } from './component/context/StateContext.tsx'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>
)
