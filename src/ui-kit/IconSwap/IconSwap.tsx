
import { Icon, IconType } from 'ui-kit'
import { TconSizeType } from 'ui-kit/Icon'
import classNames from 'classnames'
import './IconSwap.scss'

type TIconSwapProps = {
    className?: string
    iconOn: IconType
    iconOff: IconType
    iconSize: TconSizeType
    checked: boolean
    onChagne: React.ChangeEventHandler<HTMLInputElement>
}

export const IconSwap = ({
    className,
    iconOn,
    iconOff,
    iconSize,
    checked,
    onChagne
}: TIconSwapProps) => {
  return (
    <div className={classNames(className)}>
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        onChange={onChagne}
        checked={checked}
      />
      <Icon size={iconSize} className='swap-on' type={iconOn} />
      <Icon size={iconSize} className='swap-off' type={iconOff} />
    </label>
  </div>
  )
}
