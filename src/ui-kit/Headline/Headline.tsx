import classNames from 'classnames'
import { ReactNode } from 'react'
import { Button, Icon, IconType, Tags } from 'ui-kit'
import './Headline.scss'

export type HeadlineSize = 'big' | 'small'

type THeadlineProps = {
  headlineSize?: HeadlineSize
  className?: string
  children?: ReactNode //used for custom right side headline
  headlineText: string
  primaryRightIcon?: IconType
  primaryRightText?: string
  primaryBtnString?: string
  secondaryBtnString?: string
  tertiaryBtnString?: string
  primaryBtnIcon?: IconType
  secondaryBtnIcon?: IconType
  tertiaryBtnIcon?: IconType
  handleSecondaryBtn?: () => void
  handlePrimaryBtn?: () => void
  handleTertiaryBtn?: () => void
}

export const Headline: React.FC<THeadlineProps> = ({
  headlineSize = 'small',
  className,
  children,
  headlineText,
  primaryRightIcon,
  primaryRightText,
  primaryBtnString,
  secondaryBtnString,
  tertiaryBtnString,
  primaryBtnIcon,
  secondaryBtnIcon,
  tertiaryBtnIcon,
  handleSecondaryBtn,
  handlePrimaryBtn,
  handleTertiaryBtn,
}) => {
  return (
    <div
      className={classNames('headline', className, {
        // FormField__active: isFocused,
        // FormField__error: error,
      })}
    >
      <span className={`headline__title${headlineSize}`}>{headlineText}</span>
      <div className='headline__primaryRight'>
        {children}
        {primaryRightText && (
          <Tags
            tagsSize='small'
            tagsIcon={primaryRightIcon}
            className={classNames({
              'mr-4': tertiaryBtnIcon || secondaryBtnString || primaryBtnIcon,
            })}
          >
            {primaryRightText}
          </Tags>
        )}
        {tertiaryBtnString && (
          <Button
            typeIcon={tertiaryBtnIcon}
            buttonType='transparent'
            buttonSize={headlineSize}
            className={secondaryBtnString || primaryBtnIcon ? 'mr-4' : ''}
            onClick={handleTertiaryBtn}
          >
            {tertiaryBtnString}
          </Button>
        )}
        {secondaryBtnString && (
          <Button
            typeIcon={secondaryBtnIcon}
            buttonType='transparent'
            buttonSize={headlineSize}
            className={primaryBtnString ? 'mr-4' : ''}
            onClick={handleSecondaryBtn}
          >
            {secondaryBtnString}
          </Button>
        )}
        {primaryBtnString && (
          <Button typeIcon={primaryBtnIcon} buttonSize={headlineSize} onClick={handlePrimaryBtn}>
            {primaryBtnString}
          </Button>
        )}
      </div>
    </div>
  )
}
