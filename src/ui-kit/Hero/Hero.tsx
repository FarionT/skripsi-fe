import { Button } from 'ui-kit'
import './Hero.scss'

export type THeroTypes = 'centered' | 'allleft'

type THeroProps = {
  heroType: THeroTypes
}

export const Hero = ({ heroType }: THeroProps) => {
  return (
    <div className='conciseHero'>
      <div
        className={`container mx-auto py-10 px-2 lg:px-10 conciseHero__content${
          heroType === 'centered' ? ' justify-center text-center' : ''
        }`}
      >
        <div>
          <div className='conciseHero__title'>
            <span className='conciseHero__title1'>
              You imagine it,
              <br /> we code it.
            </span>
            <span className='conciseHero__title2'>
              You imagine it,
              <br /> we code it.
            </span>
          </div>
          <div className='conciseHero__body'>
            Your idea, your product, your business,
            <br /> We design, build, and improve it.
          </div>
          <Button className='mr-2'>Lets Talk</Button>
          <Button buttonType='frameless' typeIconRight='AngleDown'>
            Explore
          </Button>
        </div>
      </div>
    </div>
  )
}
