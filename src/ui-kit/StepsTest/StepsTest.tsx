import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import './StepsTest.scss'

type TStepsStyle = 'vertical' | 'horizontal'
type TStepsLabels = 'normal' | 'secondary' | 'inline' | 'non' | 'steps'
type TStepsSize = 'medium' | 'small'
type TStepsStatus = 'default' | 'error' | 'warning'

type Step = {
  subtime: string
  title: string
  description: string
}

type StepsTestProps = {
  stepsTestConfig: Step[]
  style?: TStepsStyle
  labelType?: TStepsLabels
  size?: TStepsSize
  status?: TStepsStatus
  SetNext: number,
  SetPrev: number,
}

const StepsTest: React.FC<StepsTestProps> = ({
  stepsTestConfig,
  style = 'horizontal',
  labelType = 'normal',
  size = 'medium',
  status = 'default',
}, ref) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [lineColors, setLineColors] = useState<string[]>(
    new Array(stepsTestConfig.length - 1).fill('#d5d5d5')
  )
  const [openDescIndex, setOpenDescIndex] = useState<number | null>(null)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, stepsTestConfig.length)
  }, [stepsTestConfig.length])

  useEffect(() => {
    if (style === 'vertical' && labelType === 'secondary') {
      setOpenDescIndex(currentStep)
    }
  }, [currentStep, style, labelType])

  // useImperativeHandle(ref, () => ({
  //   nextStep: handleNext,
  //   prevStep: handlePrev,
  // }));

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsTestConfig.length) {
        setIsComplete(true)
        return prevStep
      }
      const newLineColors = [...lineColors]
      newLineColors[prevStep] = '#0084ff'
      setLineColors(newLineColors)
      return prevStep + 1
    })
  }

  return (
    <div className='wrapper'>
      <ol className={`c-StepsTest ${style}`}>
        {stepsTestConfig.map((step, index) => {
          const stepStatus =
            index < currentStep ? 'done' : index === currentStep ? 'current' : 'next'

          return (
            <li
              className={`c-StepsTest__item ${stepStatus} ${labelType}`}
              key={index}
              ref={(el) => {
                if (el) stepRefs.current[index] = el
              }}
              style={
                index < lineColors.length
                  ? ({ '--line-color': lineColors[index] } as React.CSSProperties)
                  : {}
              }
            >
              <span className={`step-number ${status}`}>
                {currentStep > index || isComplete
                  ? status === 'error'
                    ? '✗'
                    : status === 'warning'
                    ? '!'
                    : '✔'
                  : ''}
              </span>

              {style === 'horizontal' && (
                <>
                  <h3 className={`c-StepsTest__title ${labelType}`}>{step.title}</h3>
                  {labelType === 'secondary' && (
                    <p className='c-StepsTest__desc'>{step.description}</p>
                  )}
                </>
              )}
              {style === 'vertical' && (
                <>
                  <h3 className={`c-StepsTest__title ${labelType}`}>{step.title}</h3>
                  {labelType === 'secondary' && (
                    <>
                      <div className='c-StepsTest__subss'>
                        <h4 className='c-StepsTest__subtime'>{step.subtime}</h4>
                        <p
                          className='c-StepsTest__desc'
                          style={{
                            display: openDescIndex === index ? 'block' : 'none',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </>
              )}
            </li>
          )
        })}
      </ol>

      {!isComplete && (
        <button className='btn' onClick={handleNext}>
          {currentStep === stepsTestConfig.length ? 'Finish' : 'Next'}
        </button>
      )}
    </div>
  )
}

export default StepsTest
