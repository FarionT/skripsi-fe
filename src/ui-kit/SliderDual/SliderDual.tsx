import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import './SliderDual.scss'

type TSliderrNum = 'non' | 'yes'
type TSliderrStyle = 'blue' | 'duo-colour'
type TSliderrToolTip = 'non' | 'yes'
type TSliderrThumbColour = 'blue' | 'white'
type TSliderType = 'active' | 'deactive'
type TSliderInput = 'non' | 'yes'

interface SliderrDualProps {
  min: number
  max: number
  onChange: (value: { min: number; max: number }) => void
  minDistance?: number
  sliderrNumMode?: TSliderrNum
  sliderrStyle?: TSliderrStyle
  sliderrToolTip?: TSliderrToolTip
  sliderrThumbColour?: TSliderrThumbColour
  type?: TSliderType
  sliderrInputMode?: TSliderInput
  sliderPrimaryColor?: string
  sliderSecondaryColor?: string
}

const SliderrDual: React.FC<SliderrDualProps> = ({
  min,
  max,
  onChange,
  minDistance = 1,
  sliderrNumMode = 'yes',
  sliderrStyle = 'duo-colour',
  sliderrToolTip = 'non',
  sliderrThumbColour = 'white',
  type = 'active',
  sliderrInputMode = 'non',
  sliderPrimaryColor = '#0084ff',
  sliderSecondaryColor = '#F88686',
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const [showLeftTooltip, setShowLeftTooltip] = useState(false)
  const [showRightTooltip, setShowRightTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ min: '0%', max: '0%' })
  const range = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(maxVal)

      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`

      if (sliderrStyle === 'blue') {
        range.current.style.background = sliderPrimaryColor
      } else {
        if (minVal <= 50 && maxVal <= 50) {
          range.current.style.background = sliderPrimaryColor
        } else if (minVal >= 50 && maxVal >= 50) {
          range.current.style.background = sliderSecondaryColor
        } else {
          const midPercent = ((50 - minVal) / (maxVal - minVal)) * 100
          range.current.style.background = `linear-gradient(to right, ${sliderPrimaryColor} ${midPercent}%, ${sliderSecondaryColor} ${midPercent}%)`
        }
      }
    }
  }, [minVal, maxVal, getPercent, sliderrStyle])

  const calculateTooltipPosition = (valueTooltip: number) => {
    let thumbRadius = 8
    const digitCount = valueTooltip.toString().length
    thumbRadius += digitCount - 1
    const fract = (valueTooltip - 0) / (100 - 0)
    const percentLeft = fract * 100
    const fractFromCentre = (fract - 0.75) * 1
    const adjustment = fractFromCentre * -thumbRadius
    return `calc(${percentLeft}% + ${adjustment}px)`
  }

  useEffect(() => {
    const minTooltipPosition = calculateTooltipPosition(minVal)
    const maxTooltipPosition = calculateTooltipPosition(maxVal)

    setTooltipPosition({
      min: minTooltipPosition,
      max: maxTooltipPosition,
    })
  }, [minVal, maxVal])

  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  const handleChange = (isMin: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    if (isMin) {
      const newValue = Math.min(value, maxVal - minDistance)
      setMinVal(newValue)
      setShowLeftTooltip(true)
      setShowRightTooltip(false)
    } else {
      const newValue = Math.max(value, minVal + minDistance)
      setMaxVal(newValue)
      setShowRightTooltip(true)
      setShowLeftTooltip(false)
    }
  }

  const handleInputChange = (isMin: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(100, Number(event.target.value)))
    if (isMin) {
      setMinVal(Math.min(value, maxVal - minDistance))
    } else {
      setMaxVal(Math.max(value, minVal + minDistance))
    }
  }

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (type === 'deactive') return

    if (track.current) {
      const trackRect = track.current.getBoundingClientRect()
      const clickPos = event.clientX - trackRect.left
      const clickPercent = (clickPos / trackRect.width) * 100
      const clickValue = Math.round(min + (clickPercent / 100) * (max - min))

      const isCloserToMin = Math.abs(clickValue - minVal) < Math.abs(clickValue - maxVal)

      if (isCloserToMin) {
        setMinVal(Math.min(clickValue, maxVal - minDistance))
        setShowLeftTooltip(true)
        setShowRightTooltip(false)
      } else {
        setMaxVal(Math.max(clickValue, minVal + minDistance))
        setShowRightTooltip(true)
        setShowLeftTooltip(false)
      }
    }
  }

  return (
    <div className='container'>
      <div className='sliderr'>
        <div className='sliderr__track' ref={track} onClick={handleTrackClick} />
        <div ref={range} className='sliderr__range' />

        <>
          {showLeftTooltip && (
            <div className='tooltip tooltip--left' style={{ left: tooltipPosition.min }}>
              {minVal}
            </div>
          )}
          {showRightTooltip && (
            <div className='tooltip tooltip--right' style={{ left: tooltipPosition.max }}>
              {maxVal}
            </div>
          )}
        </>

        {sliderrInputMode === 'yes' && (
          <div className='sliderr__values_input'>
            <input
              type='number'
              value={minVal}
              onChange={handleInputChange(true)}
              min={0}
              max={Math.min(maxVal, 100)}
              className='sliderr__left-value'
            />
            <input
              type='number'
              value={maxVal}
              onChange={handleInputChange(false)}
              min={Math.max(minVal + minDistance, 0)}
              max={100}
              className='sliderr__right-value'
            />
          </div>
        )}
        {sliderrInputMode === 'non' && (
          <div className='slider-labels'>
            <span className='slider-label slider-label--left'>{minVal}</span>
            <span className='slider-label slider-label--right'>{maxVal}</span>
          </div>
        )}
      </div>
      <input
        type='range'
        min={min}
        max={max}
        value={minVal}
        onChange={handleChange(true)}
        onMouseOver={() => {
          setShowLeftTooltip(true)
          setShowRightTooltip(false)
        }}
        onMouseLeave={() => setShowLeftTooltip(false)}
        className={`sliderr-input thumb--${sliderrThumbColour}`}
        disabled={type === 'deactive'}
      />
      <input
        type='range'
        min={min}
        max={max}
        value={maxVal}
        onChange={handleChange(false)}
        onMouseOver={() => {
          setShowRightTooltip(true)
          setShowLeftTooltip(false)
        }}
        onMouseLeave={() => setShowRightTooltip(false)}
        className={`sliderr-input thumb--${sliderrThumbColour}`}
        disabled={type === 'deactive'}
      />
    </div>
  )
}

SliderrDual.propTypes = {
  onChange: PropTypes.func.isRequired,
  minDistance: PropTypes.number,
  sliderrNumMode: PropTypes.oneOf(['non', 'yes']),
  sliderrStyle: PropTypes.oneOf(['blue', 'duo-colour']),
  sliderrToolTip: PropTypes.oneOf(['non', 'yes']),
  sliderrThumbColour: PropTypes.oneOf(['blue', 'white']),
  type: PropTypes.oneOf(['active', 'deactive']),
  sliderrInputMode: PropTypes.oneOf(['non', 'yes']),
  sliderPrimaryColor: PropTypes.string,
  sliderSecondaryColor: PropTypes.string,
}

export default SliderrDual
