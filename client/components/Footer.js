import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-item">
        PLUTO LOGO HERE
        {/* <img src={plutoLOGO} alt=“logo” /> */}
      </div>
      <div className="footer-item">Links</div>
      <div className="footer-item">
        Created for Education purposes by Team Goat-Pluto: Beiatrix Pedrasa,
        Marie Carter, Rebecca Chan, Wingman Lee
      </div>
    </footer>
  )
}

export default Footer