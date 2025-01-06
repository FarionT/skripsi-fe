import classNames from 'classnames'
import './Accordion.scss'
import { ReactElement, ReactNode, useState } from 'react'
import Icon from 'ui-kit/Icon'
import { IconType } from 'ui-kit'

type TAccordionStyle = 'product' | 'marketing'
type TAccordionSize = 'small' | 'medium' | 'large'
type TAccordionType = 'subtle' | 'bold'

type TAccordionProductData = {
  title: string
  content: string
  icon?: IconType
  isDisabled?: boolean
  child?: TAccordionMarketingData[]
}

type TAccordionMarketingData = {
  title: string
  content: string
  icon?: IconType
  isDisabled?: boolean
}

type TAccordionProduct = {
  accordionStyle: 'product'
  datas: TAccordionProductData[]
}

type TAccordionMarketing = {
  accordionStyle: 'marketing'
  datas: TAccordionMarketingData[]
}

type TAccordionProps = {
  className?: string
  accordionSize?: TAccordionSize
  accordionType?: TAccordionType
} & (TAccordionMarketing | TAccordionProduct)

export const Accordion = (props: TAccordionProps) => {
  const [activeTab, setActiveTab] = useState([-1])
  const [activeChildTab, setActiveChildTab] = useState([-1])
  const { accordionSize = 'medium', accordionType = 'subtle' } = props
  
  const marketingAccordionHandler = (tab: number) => {
    if(activeTab[0] === tab) {
      setActiveTab([-1])
    } else setActiveTab([tab])
  }

  const productAccordionHandler = (tab: number) => {
    if (activeTab.includes(tab)) {
      setActiveTab(activeTab.filter((item) => item !== tab))
    } else {
      setActiveTab((prev) => [ ...prev, tab ])
    }
    setActiveChildTab([-1])
  }

  const productAccordionChildHandler = (tab: number) => {
    if (activeChildTab.includes(tab)) {
      setActiveChildTab(activeChildTab.filter((item) => item !== tab))
    } else {
      setActiveChildTab((prev) => [ ...prev, tab ])
    }
  }

  if (props.accordionStyle === 'product') {
    return (
      <div className={classNames('conciseAccordion conciseAccordion-product ', props.className, {
        'conciseAccordion-small' : accordionSize === 'small',
        'conciseAccordion-medium' : accordionSize === 'medium',
        'conciseAccordion-large' : accordionSize === 'large',
        'conciseAccordion-bold' : accordionType === 'bold'
      })}>
        {props.datas.map((item, index) => (
          <div key={index} className={classNames('conciseAccordion', {
            'conciseAccordion-active': activeTab.includes(index),
            'conciseAccordion-disabled': item.isDisabled
          })}>
            <div className='conciseAccordionTitle' onClick={() => productAccordionHandler(index)}>
              <div className='conciseAccordionTitle-left'>
                {item.icon ? <Icon className='conciseAccordion-title-icon' type={item.icon} /> : null}
                {item.title ? item.title : 'Click to open'}
              </div>
              <Icon type='ChevronDown' className='conciseAccordion-caretDown' />
            </div>
            <div className='conciseAccordionBorder'>
              <div className='conciseAccordionContent'>
                <div className='conciseAccordionContent-text'>{item.content}</div>
                <div className='conciseAccordionContent-childContainer'>
                {item.child?.length !== 0 && item.child?.map((item2, index2) => (
                  <div key={index2}  className={classNames('conciseAccordionContent-childItem', {
                    'conciseAccordion-childActive': activeChildTab.includes(index2),
                    'conciseAccordion-childDisabled': item.isDisabled
                  })}>
                    <div className='conciseAccordion-childTitle' onClick={() => productAccordionChildHandler(index2)}>
                      <div>
                        {item2.icon && <Icon className='conciseAccordion-childTitleIcon' type={item2.icon} />}
                        <div>{item2.title}</div>
                      </div>
                      <Icon type='ChevronDown' className='conciseAccordion-childCaretDown' />
                    </div>
                    <div className='conciseAccordion-childContent'>{item2.content}</div>
                  </div>
                ))}
                </div>
                {/* <div className='conciseAccordionContent-text'>{item.content}</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className={classNames('conciseAccordion conciseAccordion-marketing ', props.className, {
        'conciseAccordion-small' : accordionSize === 'small',
        'conciseAccordion-medium' : accordionSize === 'medium',
        'conciseAccordion-large' : accordionSize === 'large',
        'conciseAccordion-bold' : accordionType === 'bold',
      })}>
        {props.datas.map((item, index) => (
          <div key={index} className={classNames('conciseAccordion', {
            'conciseAccordion-active': activeTab[0] === index,
            'conciseAccordion-disabled': item.isDisabled
          })}>
            <div className='conciseAccordionTitle' onClick={() => marketingAccordionHandler(index)}>
              <div className='conciseAccordionTitle-left'>
                {item.icon ? <Icon className='conciseAccordion-title-icon' type={item.icon} /> : null}
                {item.title ? item.title : 'Click to open'}
              </div>
              <Icon type='ChevronDown' className='conciseAccordion-caretDown' />
            </div>
            <div className='conciseAccordionBorder'>
              <div className='conciseAccordionContent'>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
