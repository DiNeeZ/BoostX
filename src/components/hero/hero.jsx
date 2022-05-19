import React from 'react'

import Button from '../button/button'
import { ReactComponent as HeroBg } from '../../assets/images/hero-bg.svg'
import { ReactComponent as DecorBg } from '../../assets/images/hero-decor.svg'

import './hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__content'>
          <div className='hero__descr'>
            <h1 className='hero__title'>Premium Launchpad Technology</h1>
            <p className='hero__subtitle'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
            <Button size='md'>Launch your Projects</Button>
          </div>
          <div className='hero__img'>
            <HeroBg />
          </div>
        </div>
      </div>
      <DecorBg className='hero__decor'/>
    </section>
  )
}

export default Hero