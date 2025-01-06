import React, { DOMAttributes, memo, useState } from 'react'
import { IconType, iconTypes } from './IconType'
import { newGuid } from 'utils/guid'
import classNames from 'classnames'
import './Icon.scss'

export type TconSizeType = 'xtraSmall' | 'small' | 'semimedium' | 'medium' | 'big' | 'superbig'
export type TIconColor = 'primary' | 'danger' | 'success' | 'bnw'

export type TIconProps = DOMAttributes<HTMLSpanElement> & {
  className?: string
  size?: TconSizeType
  type: IconType
  color?: TIconColor
  onClick?: () => void | Promise<void>
  dataTestId?: string
}

const getIcon = (type: IconType, id: string): JSX.Element => {
  const iconElement = iconTypes.get(type) as JSX.Element
  return React.cloneElement(iconElement, { id })
}

const IconComponent: React.FC<TIconProps> & { dataTestIdCounter: number } = ({
  className,
  size = 'small',
  type,
  color,
  onClick,
  dataTestId,
  ...rest
}) => {
  const [generatedDataTestId] = useState(dataTestId || `icon-${IconComponent.dataTestIdCounter++}`)

  return (
    <div
      data-testid={generatedDataTestId}
      id={`id-${type}`}
      className={classNames('Icon', className, `Icon-IconSize__${size}`, `Icon-IconColor__${color}`)}
      onClick={onClick}
      {...rest}
    >
      {getIcon(type, newGuid())}
    </div>
  )
}

IconComponent.dataTestIdCounter = 0

export const Icon = memo(IconComponent)
