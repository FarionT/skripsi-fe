import React from 'react'
import classNames from 'classnames'
import './SortingIcon.scss'

export type SortingType = 'descending' | 'ascending'

export type TSortingIconProps = {
  className?: string
  sort?: SortingType
}

export const SortingIcon: React.FC<TSortingIconProps> = ({ className, sort }) => {
  return (
    <div className={classNames('SortingIcon', className)}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' height='16px' width='16px'>
        <polygon
          fill={sort === 'descending' ? '#000' : 'none'}
          stroke='#000000'
          strokeWidth='2'
          strokeMiterlimit='10'
          points='16,5 24,13 8,13 '
        />
        <polygon
          fill={sort === 'ascending' ? '#000' : 'none'}
          stroke='#000000'
          strokeWidth='2'
          strokeMiterlimit='10'
          points='16,27 8,19 24,19 '
        />
      </svg>
    </div>
  )
}
