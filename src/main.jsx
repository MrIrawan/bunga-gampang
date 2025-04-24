import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routers } from '../routers.jsx'
import { Toaster } from 'sonner'
import { watchToken } from './services/tokenServices.js'
import { AuthContextProvider } from './context/AuthContext.jsx'
import './index.css'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

watchToken();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <Navbar />
        <RouterProvider router={routers} />
        <Toaster toastOptions={{
          style: {
            fontFamily: 'main, times new roman',
          },
        }}/>
      <Footer />
    </AuthContextProvider>
  </StrictMode>,
)
