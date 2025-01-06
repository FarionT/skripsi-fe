import classNames from 'classnames'
import './Tags.scss'
import { Icon } from 'ui-kit/Icon'
import { IconType } from 'ui-kit'

export type TagsType = 'gray' | 'primary' | 'green' | 'cyan' | 'purple' | 'pink' | 'orange'
export type TagsSize = 'xsmall' |'small' | 'big'

export interface ITags {
  tagsType?: TagsType
  tagsIcon?: IconType
  tagsSize?: TagsSize
  className?: string
  children: React.ReactNode
}

export const Tags: React.FC<ITags> = ({
  tagsType = 'primary',
  tagsIcon,
  tagsSize = 'small',
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        'conciseTag',
        `conciseTag__${tagsType} conciseTag__${tagsSize}`,
        className
      )}
    >
      {tagsIcon ? (
        <Icon
          type={tagsIcon}
          size={tagsSize === 'xsmall' ? 'small' : tagsSize}
          className={classNames(`conciseTagIcon conciseTagIcon__${tagsType}`)}
        />
      ) : null}

      <span className={'conciseTag__Text'}>{children}</span>
    </div>
  )
}
