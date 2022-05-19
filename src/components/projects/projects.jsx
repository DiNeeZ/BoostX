import React, { useEffect, useRef, useState } from 'react'

import Button from '../button/button'
import ProjectItem from '../project-item/project-item'
import { projectData } from '../../utils/data'

import './projects.scss'

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(true)
  const listRef = useRef()

  useEffect(() => {
    if (isScroll) return

    listRef.current.scrollIntoView({ block: isOpen ? 'end' : 'start', behavior: 'smooth' })
  }, [isOpen, isScroll])

  const handleClick = () => {
    setIsOpen(!isOpen)
    setIsScroll(false)
  }

  const projects = isOpen ? projectData : projectData.slice(0, 4)

  return (
    <section className='projects'>
      <div className='container projects__container'>
        <h2 className='projects__title'>Featured Projects</h2>
        <p className='projects__subtitle'>
          Innovative Launchpad Technology created for IDOs with unique features designed to
          boost your project into the stratosphere; live orderbooks, dynamic pricing and much more…
        </p>

        <ul
          className='list-reset projects__list'
          ref={listRef}>
            {
              projects.map(itemData => <ProjectItem key={itemData.id} itemData={itemData} />)
            }
        </ul>
        <Button className='projects__btn' size='md' onClick={handleClick} >
          {isOpen ? 'Show Less' : 'Show All'}
        </Button>
      </div>
    </section >
  )
}

export default Projects