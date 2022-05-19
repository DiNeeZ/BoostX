import React from 'react'

import Button from '../button/button'
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='container-fluid header__container'>
        <a href='/#' className='header__logo' aria-label='go to main page'>
          <Logo />
        </a>
        <nav className='header__nav'>
          <ul className='list-reset header__nav-list nav-list'>
            <li className='nav-list__item'><a href='/#'>Features</a></li>
            <li className='nav-list__item'><a href='/#'>FAQs</a></li>
            <li className='nav-list__item'><a href='/#'>About</a></li>
          </ul>
        </nav>
        <div className='header__right'>
          <a href='/#' className='header__sign-in'>Sign In</a>
          <Button shadow>Start Free</Button>
        </div>
      </div>
    </header>
  )
}

export default Header