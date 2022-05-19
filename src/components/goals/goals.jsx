import React from 'react'
import goalsImage from '../../assets/images/goals.svg'

import './goals.scss'

const Goals = () => {
  return (
    <section className='goals'>
      <div className='container'>
        <div className='goals__content'>
          <h2 className='goals__title'>Bringing Investors and High Quality Projects Together</h2>
          <p className='goals__descr'>
            Boostx provides its community with fair access to exclusive early-stage presale opportunities,
            allowing you to acquire highly-anticipated tokens before they hit the market; while simultaneously
            giving innovative projects the ability to crowdsource funding and build a strong and loyal community in the process.
            Using our game changing presale dashboard technology and extensive marketing experience,
            boostx successfully facillitates the launches of multiple high quality blockchain projects.
          </p>
        </div>
        <div className='goals__img'>
          <img src={goalsImage} alt='decoration'/>
        </div>
      </div>
    </section>
  )
}

export default Goals