import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import './Steps.scss'

type TStepsStyle = 'vertical' | 'horizontal' | 'test'
type TStepsLabels = 'normal' | 'secondary' | 'inline' | 'non' | 'stepsdata' | 'test'
type TStepsSize = 'medium' | 'small'
type TStepsStatus = 'default' | 'error' | 'warning' | 'disable'
type TStepsdata_title = 'non' | 'yes'
type TStepsTest_mode = 'complete' | 'active' | 'incomplete' | 'iserror' | 'iswarning' | 'isdisable'

type Step = {
  subtime: string
  title: string
  description: string
}

type StepsProps = {
  StepsTestConfig: Step[]
  style?: TStepsStyle
  labelType?: TStepsLabels
  size?: TStepsSize
  status?: TStepsStatus
  title?: TStepsdata_title
  testMode?: TStepsTest_mode
  currentStep?: number
  SetNext?: number
  SetPrev?: number
  useExternalButtons?: boolean // Properti baru untuk menggunakan tombol eksternal
}

const Steps = forwardRef<
  {
    nextStep: () => void
    prevStep: () => void
  },
  StepsProps
>(
  (
    {
      StepsTestConfig,
      style = 'horizontal',
      labelType = 'normal',
      size = 'medium',
      status = 'default',
      title = 'non',
      testMode = 'complete',
      useExternalButtons = false, // Default tidak menggunakan tombol eksternal
    },
    ref
  ) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [lineColors, setLineColors] = useState<string[]>(
      new Array(StepsTestConfig.length - 1).fill('#d5d5d5')
    )
    const [openDescIndex, setOpenDescIndex] = useState<number | null>(null)
    const stepRefs = useRef<(HTMLLIElement | null)[]>([])

    useEffect(() => {
      stepRefs.current = stepRefs.current.slice(0, StepsTestConfig.length)
    }, [StepsTestConfig.length])

    useEffect(() => {
      if (style === 'vertical' && labelType === 'secondary') {
        setOpenDescIndex(currentStep)
      }
    }, [currentStep, style, labelType])

    useImperativeHandle(ref, () => ({
      nextStep: handleNext,
      prevStep: handlePrev,
    }))

    const handleNext = () => {
      setCurrentStep((prevStep) => {
        if (prevStep === StepsTestConfig.length) {
          setIsComplete(true)
          return prevStep
        }

        const newLineColors = [...lineColors]
        newLineColors[prevStep] =
          status === 'error'
            ? '#e92c2c'
            : status === 'warning'
            ? '#f98600'
            : status === 'disable'
            ? '#E5E5E5'
            : '#0084ff'
        setLineColors(newLineColors)

        return prevStep + 1
      })
    }

    const handlePrev = () => {
      setCurrentStep((prevStep) => {
        if (prevStep === 0) return prevStep

        const newLineColors = [...lineColors]
        newLineColors[prevStep - 1] = '#d5d5d5'
        setLineColors(newLineColors)

        return prevStep - 1
      })
    }

    const handleStepClick = (index: number) => {
      if (index === currentStep) return

      const newLineColors = [...lineColors]
      const minIndex = Math.min(index, currentStep)
      const maxIndex = Math.max(index, currentStep)

      for (let i = minIndex; i < maxIndex; i++) {
        newLineColors[i] =
          index < currentStep
            ? '#d5d5d5'
            : status === 'error'
            ? '#e92c2c'
            : status === 'warning'
            ? '#f98600'
            : status === 'disable'
            ? '#E5E5E5'
            : '#0084ff'
      }

      setLineColors(newLineColors)
      setCurrentStep(index)
    }

    const statusClass = `c-steps--status-${status}`
    const status2Class = `c-Steps__item--status-${status}`
    const testStatusClass = `c-Steps__item--testStatus-${testMode}`

    return (
      <div className={`wrapper ${statusClass}`}>
        <ol className={`c-Steps ${style} ${statusClass}`}>
          {StepsTestConfig.map((step, index) => {
            const stepStatus =
              index < currentStep ? 'done' : index === currentStep ? 'current' : 'next'

            return (
              <li
                className={`c-Steps__item ${status2Class} ${labelType} ${stepStatus} ${size} ${testStatusClass}`}
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                style={
                  index < lineColors.length
                    ? ({ '--line-color': lineColors[index] } as React.CSSProperties)
                    : {}
                }
                onClick={() => handleStepClick(index)}
              >
                <span className={`step-number ${status} ${size}`}>
                  {currentStep > index || isComplete
                    ? status === 'error' || testMode === 'iserror'
                      ? '✗'
                      : status === 'warning' || testMode === 'iswarning'
                      ? '!'
                      : status === 'disable' || testMode === 'isdisable'
                      ? ''
                      : '✔'
                    : testMode === 'iswarning'
                    ? '!'
                    : testMode === 'iserror'
                    ? '✗'
                    : testMode === 'complete'
                    ? '✔'
                    : index}
                </span>

                {labelType !== 'stepsdata' || title === 'yes' ? (
                  <h3
                    className={`c-Steps__title ${labelType} ${size} ellipsis`}
                    data-title={step.title}
                  >
                    {step.title}
                  </h3>
                ) : null}

                {style === 'horizontal' && labelType === 'secondary' && (
                  <p className={`c-Steps__desc ${size}`}>{step.description}</p>
                )}

                {style === 'vertical' && labelType === 'secondary' && (
                  <div className='c-Steps__subss'>
                    <h4 className='c-Steps__subtime'>{step.subtime}</h4>
                    <p className={`c-Steps__desc ${openDescIndex === index ? 'open' : ''}`}>
                      {step.description}
                    </p>
                  </div>
                )}
              </li>
            )
          })}
        </ol>

        {style === 'horizontal' &&
          labelType === 'stepsdata' &&
          currentStep < StepsTestConfig.length && (
            <div className='stepsdata-container'>
              <p className='stepsdata-info'>
                Step {Math.min(currentStep + 1, StepsTestConfig.length)} of {StepsTestConfig.length}
              </p>
              <a className='stepsdata-title'>{StepsTestConfig[currentStep].title}</a>
            </div>
          )}

        {!isComplete &&
          !useExternalButtons && ( // Render tombol internal jika tidak menggunakan tombol eksternal
            <div className='btn-container'>
              {currentStep === 0 ? (
                <></>
              ) : (
                <>
                  <button
                    className='btn-stepspage-prev'
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                  >
                    Prev
                  </button>
                </>
              )}
              <button className='btn-stepspage-next' onClick={handleNext}>
                {currentStep === StepsTestConfig.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          )}
      </div>
    )
  }
)

export default Steps
