import React from 'react'

import Navbar from '../nav-bar/nav-bar';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='container-fluid header__container'>
        <a href='/#' className='header__logo' aria-label='go to main page'>
          <Logo />
        </a>
        <Navbar />
      </div>
    </header>
  )
}

export default Header