import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ScrollToTop from '../ScrollTop/ScrollToTop.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop/>
      {/* <Header/> */}
      <App />
      {/* <Footer/> */}
    </Router>
  </StrictMode>,
)
