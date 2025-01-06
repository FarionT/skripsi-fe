import { Link } from 'react-router-dom'
import { mainLogo } from 'ui-kit/assets/image'
import classNames from 'classnames'
import './Footer.scss'

type TFooterProps = {
  className?: string
}

export const Footer = ({ className }: TFooterProps) => {
  return (
    <div className='conciseFooterContainer'>
      <footer className='footer conciseFooter container mx-auto p-2 lg:px-10'>
        <aside>
          <Link to='/'>
            <img src={mainLogo} alt='Habco Logo'></img>
          </Link>
          <p>Concise @ 2022.</p>
        </aside>
        <nav>
          <header className='conciseFooter__title'>Contact Us</header>
          <a className='link link-hover'>info@concise.co.id</a>
          <header className='conciseFooter__title pt-6'>Office</header>
          <a className='link link-hover'>
            Ruko Golden 8 Blok K No.25
            <br /> Tangerang bantan 15810
          </a>
        </nav>
        <nav>
          <header className='conciseFooter__title'>Company</header>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>About</a>
          <a className='link link-hover'>Career</a>
        </nav>
        <nav>
          <header className='conciseFooter__title'>Social</header>
          <a className='link link-hover'>Instagram</a>
          <a className='link link-hover'>Twitter</a>
          <a className='link link-hover'>Facebook</a>
          <a className='link link-hover'>LinkedIn</a>
        </nav>
      </footer>
    </div>
  )
}
