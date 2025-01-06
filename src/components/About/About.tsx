import { placeholder, product_1, product_2, product_3 } from 'ui-kit/assets/image'
import { Button, ImageSlider } from 'ui-kit'
import classNames from 'classnames'
import './About.scss'

type TAboutProps = {
  className?: string
}

export const About = ({ className }: TAboutProps) => {
  return (
    <div className={classNames('about', className)}>
      <div className='aboutImage'>
        <ImageSlider className='' imageUrls={[product_1, product_2, product_3]} />
      </div>
      <div className='aboutContent'>
        <div className='about__title'>About Us</div>
        <div className='about__desc'>
          Our theme is the most advanced and user-friendly theme you will find on the market, we
          have documentation and video to help set your site really easily, pre-installed demos you
          can import in one click and everything from the theme options to page content can be
          edited from the front-end. This is the theme you are looking for.
        </div>
        <Button>Our Work</Button>
      </div>
    </div>
  )
}
