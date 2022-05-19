import Button from '../button/button'
import chain from '../../assets/images/chain.svg'
import telegram from '../../assets/images/telegram.svg'
import globe from '../../assets/images/globe.svg'
import info from '../../assets/images/info.svg'

import './project-item.scss'

const ProjectItem = ({ itemData }) => {
  const { icon, saleEnded, title, subtitle, text, rate } = itemData

  return (
    <li className='project-item'>
      <div className='project-item__top'>
        <div className='project-item__logo'>
          <img src={icon} alt={`${title} icon`} className='project-item__image' />
        </div>
        <div className='project-item__headers'>
          <small className='project-item__sale-ended'>Sale ended on <span>{saleEnded}</span></small>
          <h4 className='project-item__title'>{title}</h4>
          <p className='project-item__subtitle'>{subtitle}</p>
        </div>
      </div>
      <p className='project-item__descr'>{text}</p>
      <ul className='list-reset project-item__links'>
        <li className='project-item__link'>
          <a href='/#'>
            <img src={chain} alt='bnb chain icon' className='project-item__link-icon' />
            <div className='project-item__link-text'>Distribution and launch on BNB chain</div>
          </a>
        </li>
        <li className='project-item__link'>
          <a href='/#'>
            <img src={telegram} alt='bnb chain icon' className='project-item__link-icon' />
            <div className='project-item__link-text'>Projects Official Telegram</div>
          </a>
        </li>
      </ul>
      <div className='project-item__bottom'>
        <Button size='lg' className='project-item__btn'>Enter Presale</Button>
        <div className='project-item__change'>
          <span className='project-item__change-title'>Presale launch</span>
          <span className='project-item__change-nums'>{rate}</span>
        </div>
      </div>
      <div className='project-item__hints'>
        <span className='project-item__hint project-item__hint--location'>
          <img src={globe} alt='' className='project-item__hint-icon' />
        </span>
        <span className='project-item__hint project-item__hint--info'>
          <img src={info} alt='' className='project-item__hint-icon' />
        </span>
      </div>
    </li>
  )
}

export default ProjectItem