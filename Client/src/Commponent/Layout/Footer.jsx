import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-dark text-light p-2'>
        <h6 className='text-center'>All Right Reserved &copy; Pik@_30</h6>
        <p className='text-center'>
          <Link to="/About" className='footer-li'>About</Link>|
          <Link to="/Contact" className='footer-li'>Contact</Link>|
          <Link to="/Policy" className='footer-li'>Privacy Policy</Link>
        </p>
      </div>
    </>
  )
}

export default Footer
