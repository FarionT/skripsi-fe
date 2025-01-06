import { useState } from 'react'
import { Icon } from 'ui-kit'
import classNames from 'classnames'
import './ImageSlider.scss'

type TImageSliderProps = {
  className?: string
  imageUrls: string[]
}

export const ImageSlider = ({ className, imageUrls }: TImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }

  return (
    <div className={classNames('conciseImageSlider', className)}>
      <div className='conciseImageSliderImageContainer'>
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className='conciseImageSliderImage'
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      {/* <div className='conciseImageSliderButton'></div> */}
      <div className='conciseImageSliderButton conciseImageSliderLeft' onClick={showPrevImage}>
        <div className='conciseImageSliderButtonIcon'>
          <Icon type={'AngleLeft'} />
        </div>
      </div>
      <div className='conciseImageSliderButton conciseImageSliderRight' onClick={showNextImage}>
        <div className='conciseImageSliderButtonIcon'>
          <Icon type={'AngleRight'} />
        </div>
      </div>
      <div className='conciseImageSliderNav'>
        {imageUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className={`conciseImageSliderNavIcon ${
              index === imageIndex ? 'conciseImageSliderNavActive' : ''
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}
