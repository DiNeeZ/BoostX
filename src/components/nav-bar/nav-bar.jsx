import React, { useEffect, useState } from 'react'
import Button from '../button/button'
import './nav-bar.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])


  return (
    <>
      <nav className={`nav ${isOpen && 'open'}`}>
        <ul className='list-reset nav__list'>
          <li className='nav__list-item'><a href='/#'>Features</a></li>
          <li className='nav__list-item'><a href='/#'>FAQs</a></li>
          <li className='nav__list-item'><a href='/#'>About</a></li>
        </ul>
        <div className='nav__right'>
          <a href='/#' className='nav__sign-in'>Sign In</a>
          <Button shadow>Start Free</Button>
        </div>
      </nav>
      <div className={`burger-btn ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </div>
    </>
  )
}

export default Navbar