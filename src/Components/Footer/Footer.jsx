import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="goTopBtn">
            <NavLink to='#header'><h3>Back to top</h3></NavLink>
        </div>
        <div className="footer-social">
          <NavLink to="https://x.com/@aakshit906" target="_blank"><i className="fa-brands fa-x-twitter"></i></NavLink>
          <NavLink to="https://instagram.com/sisodia_akshit" target="_blank"><i className="fab fa-instagram"></i></NavLink>
        </div>
        <div className="footer-links">
          <NavLink to="/home">shop</NavLink>
          <NavLink to="/Newstand">Newstand</NavLink>
          <NavLink to="/">Who we are</NavLink>
        </div>
        <p>© 2024 Akshit Sisodiya. All rights reserved.</p>
      </div>
  </footer>
  )
}

export default Footer