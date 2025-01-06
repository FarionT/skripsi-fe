import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import { Icon } from '..'
import './Search.scss'

export type TSearchProps = {
  className?: string
  searchedKeyword?: string
  searchedPlaceholder?: string
  name?: string
  isDisabled?: boolean
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search: React.FC<TSearchProps> = ({
  className,
  searchedKeyword,
  searchedPlaceholder = 'Search',
  name,
  isDisabled,
  onSearchChange,
}) => {
  const [isActive, setIsActive] = useState(false)
  const searchRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange && onSearchChange(event)
  }

  const handleBlur = () => {
    setIsActive(false)
  }

  const handleFocus = () => {
    setIsActive(true)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    if(!isDisabled) {
      searchRef.current?.focus()
    }
  }, [isDisabled])

  return (
    <div
      id='id-search'
      className={classNames('Search', className, {
        Search__active: isActive,
      })}
    >
      <div
        className={classNames('Search__OuterBorder', {
          Search__OuterBorder_Active: isActive,
        })}
      >
        <form onSubmit={submitHandler} className='Search-Form'>
          <div className='Search-InputWrapper flex items-center'>
            <Icon className='Search-Icon' type='Search' />
            <input
              className='Search-Input'
              autoComplete='off'
              name={name}
              placeholder={searchedPlaceholder}
              type='text'
              value={searchedKeyword}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              data-testid={name}
              disabled={isDisabled}
              ref={searchRef}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
