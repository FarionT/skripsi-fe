import './Avatar.scss'
import classNames from 'classnames'
import Icon from 'ui-kit/Icon'

export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl'
export type AvatarAppearance = 'none' | 'error' | 'warning' | 'success' | 'info'
export type AvatarType = 'icon' | 'image' | 'text'
export type AvatarShape = 'circle' | 'square'
type ImageAvatarProps = {
  avatarType: 'image'
  url: string
  alt?: string
}

type TextAvatarProps = {
  avatarType: 'text'
  name: string
}

type IconAvatarProps = {
  avatarType: 'icon'
}

export type TAvatarProps = {
  className?: string
  avatarSize?: AvatarSize
  avatarAppearance?: AvatarAppearance
  avatarShape?: AvatarShape
} & (ImageAvatarProps | TextAvatarProps | IconAvatarProps)

export const Avatar = (props: TAvatarProps) => {
  const { avatarSize = 'm', avatarAppearance = 'none', avatarShape = 'circle' } = props
  let initials = ''
  if (props.avatarType === 'text' && props.name) {
    const words = props.name.split(' ')
    initials = words
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase())
      .slice(0, 2)
      .join('')
  }

  return (
    <div
      className={classNames('Avatar', props.className, {
        Avatar__xtrasmall: avatarSize === 'xs',
        Avatar__small: avatarSize === 's',
        Avatar__medium: avatarSize === 'm',
        Avatar__large: avatarSize === 'l',
        Avatar__xtralarge: avatarSize === 'xl',
        Avatar__square: avatarShape === 'square',
        Avatar__circle: avatarShape === 'circle',
        Avatar__none: avatarAppearance === 'none',
        Avatar__error: avatarAppearance === 'error',
        Avatar__warning: avatarAppearance === 'warning',
        Avatar__success: avatarAppearance === 'success',
        Avatar__info: avatarAppearance === 'info',
        Avatar__icon__grey: avatarAppearance === 'none',
        Avatar__icon__white: avatarAppearance !== 'none',
      })}
    >
      {props.avatarType === 'icon' && (
        <Icon
          type='Avatar'
          size={avatarSize === 's' ? 'small' : 'big'
          }
        />
      )}
      {props.avatarType === 'image' && props.url && <img src={props.url} alt={props.alt} />}
      {props.avatarType === 'text' && props.name && <span>{initials}</span>}
    </div>
  )
}
