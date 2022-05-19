import React from 'react'

import Button from '../button/button'
import { featutersList } from '../../utils/data'

import './features.scss'

const Features = () => {
  return (
    <section className='features'>
      <div className='container features__container'>
        <h2 className='features__title'>BoostX Key Features</h2>
        <p className='features__descr'>
          Innovative Launchpad Technology created for IDOs with unique features designed to boost your
          project into the stratosphere; live orderbooks, dynamic pricing and much more…
        </p>
        <ul className='list-reset features__list'>
          {
            featutersList.map(item => {
              return (
                <li className='features__list-item features-item' key={item.id}>
                  <img className='features-item__image' src={item.icon} alt={item.title}/>
                  <p className='features-item__title'>{item.title}</p>
                </li>
              )
            })
          }
        </ul>
        <Button size='md'>Launch your Projects</Button>
      </div>
    </section>
  )
}

export default Features