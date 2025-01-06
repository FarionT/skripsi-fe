import React, { useState, useEffect, useRef } from 'react'
import './Slider.scss'
import Tooltip from 'ui-kit/Tooltip'

type TSliderrSize = 'small' | 'medium' | 'large'
type TSlideType = 'primary' | 'dragging' | 'deactive'
type TSliderrNum = 'non' | 'yes'
type TSliderrMode = 'mono'
type TSliderrThumbColour = 'blue' | 'white'
type TSliderInput = 'non' | 'yes'

interface TSliderrProps {
  sliderrSize?: TSliderrSize
  sliderrType?: TSlideType
  sliderrShowNumbers?: TSliderrNum
  sliderrMode?: TSliderrMode
  sliderrThumbColour?: TSliderrThumbColour
  sliderInputMode?: TSliderInput
}

const Sliderr: React.FC<TSliderrProps> = ({
  sliderrSize = 'medium',
  sliderrType = 'primary',
  sliderrShowNumbers = 'yes',
  sliderrMode = 'mono',
  sliderrThumbColour = 'white',
  sliderInputMode = 'non',
}) => {
  const [value, setValue] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [sliderrWidth, setSliderrWidth] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const sliderrRef = useRef<HTMLDivElement | null>(null)

  const handleChange = (newValue: number) => {
    console.log('Received newValue:', newValue)
    const clampedValue = Math.max(0, Math.min(newValue, 100))
    console.log('Clamped value:', clampedValue)
    setValue(clampedValue)
    setIsActive(true)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value)
    if (!isNaN(newValue) && newValue >= 0) {
      handleChange(newValue)
    }
  }

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (sliderrRef.current) {
      const rect = sliderrRef.current.getBoundingClientRect()
      const clickPosition = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
      const newValue = Math.round((clickPosition / rect.width) * 100)
      handleChange(newValue)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const handleMouseMove = (event: MouseEvent) => {
    if (sliderrRef.current && isDragging) {
      const rect = sliderrRef.current.getBoundingClientRect()
      const movePosition = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
      const newValue = Math.round((movePosition / rect.width) * 100)
      handleChange(newValue)
    }
  }

  const handleMouseUp = () => {
    setIsActive(false)
    setIsDragging(false)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    if (sliderrType !== 'deactive') {
      setIsActive(true)
      setIsDragging(true)
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
  }

  useEffect(() => {
    const sliderrElement = document.querySelector('.sliderr')
    if (sliderrElement) {
      setSliderrWidth(sliderrElement.clientWidth)
    }
  }, [sliderrSize])

  const calculateTooltipPosition = (valueTooltip: number) => {
    let thumbRadius = 8
    const digitCount = valueTooltip.toString().length
    thumbRadius += digitCount - 1
    const fract = (valueTooltip - 0) / (100 - 0)
    const percentLeft = fract * 100
    const fractFromCentre = (fract + 0.5) * 2
    const adjustment = fractFromCentre * -thumbRadius
    return `calc(${percentLeft}% + ${adjustment}px)`
  }

  return (
    <>
      {sliderInputMode === 'yes' && (
        <div className='sliderr-mono-input-container'>
          <input
            type='number'
            value={value}
            onChange={handleInputChange}
            min={0}
            max={100}
            className='slider-mono-input'
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </div>
      )}
      <Tooltip
        placement='top'
        content={String(value)}
        className='Tooltip_style_slider'
        style={{ left: calculateTooltipPosition(value), transform: 'translateX(0%)' }}
        distanceFromChild={-10}
      >
        <div
          ref={sliderrRef}
          className={`sliderr ${sliderrSize} ${sliderrType} ${sliderrThumbColour}`}
          onClick={handleTrackClick}
        >
          <div className='sliderr-slider-container'>
            <div className='sliderr-slider'>
              <input
                type='range'
                min={0}
                max={100}
                value={value}
                onChange={(e) => handleChange(parseInt(e.target.value))}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className={`sliderr-input ${isActive ? 'active' : 'deactive'}`}
                style={{ '--value': value } as React.CSSProperties}
                disabled={sliderrType === 'deactive'}
              />
            </div>
          </div>
          {sliderrShowNumbers === 'yes' && (
            <div className='sliderr-labels'>
              <span className='sliderr-label-left'>0</span>
              <span className='sliderr-label-right'>100</span>
            </div>
          )}
        </div>
      </Tooltip>
    </>
  )
}

export default Sliderr
