import React, { memo } from 'react'
import classNames from 'classnames'
import { Button, Icon, IconType } from 'ui-kit'
import { TButtonProps } from 'ui-kit/Button'
import './IconButton.scss'

export type TIconButtonProps = TButtonProps & {
  className?: string
  typeIcon: IconType
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent) => void
}

const IconButtonComponent: React.FC<TIconButtonProps> = ({
  className,
  typeIcon,
  isDisabled = false,
  onClick,
  ...rest
}) => {
  return (
    <Button
      className={classNames('IconButton', className)}
      data-testid='test-icon-button'
      isDisabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      <Icon type={typeIcon} />
    </Button>
  )
}

export const IconButton = memo(IconButtonComponent)
