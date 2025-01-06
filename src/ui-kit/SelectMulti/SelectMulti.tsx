import { DropdownPosition } from 'types'
import React, { useEffect, useState } from 'react'
import { Icon, Input, Search } from 'ui-kit'
import classNames from 'classnames'
import './SelectMulti.scss'

type TSelectMultiProps<T, K extends keyof T> = {
  isDisabled?: boolean
  isClear?: boolean
  value?: T[K][]
  className?: string
  dropdownPosition?: DropdownPosition
  placeholder?: string
  options: T[]
  getOptionValue: K
  getOptionLabel: K
  onchange?: (value: T[K][] | []) => void
  customCheckAllTagLabel?: string
  customCheckAllLabel?: string
}

export const SelectMulti = <T, K extends keyof T>({
  isDisabled = false,
  isClear = true,
  value,
  className,
  dropdownPosition = '',
  placeholder = 'placeholder',
  options,
  getOptionValue,
  getOptionLabel,
  onchange,
  customCheckAllTagLabel,
  customCheckAllLabel,
}: TSelectMultiProps<T, K>) => {
  const [query, setQuery] = useState('')
  const [checkAll, setCheckAll] = useState(false)

  useEffect(() => {
    if (value && options && value.length === options.length) {
      setCheckAll(true)
    } else {
      setCheckAll(false)
    }
  }, [value, options])

  const selectedOption: T[] | undefined = options?.filter((item) =>
    value?.includes(item[getOptionValue])
  )

  const filter = (optionsTemp: T[]) => {
    return optionsTemp.filter(
      (option) => (option[getOptionLabel] as string).toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  }

  const onSelectChild = (selectedChildObj: T | null) => {
    setQuery('')

    const selectedValue = selectedChildObj ? selectedChildObj[getOptionValue] : null
    const tempValue: T[K][] = value ? [...value] : []

    const valueFind =
      value && selectedChildObj ? value.findIndex((val: T[K]) => val == selectedValue) : -1

    if (valueFind > -1) {
      tempValue.splice(valueFind, 1)
    } else {
      selectedValue ? tempValue.push(selectedValue) : null
    }

    tempValue.length === options?.length ? setCheckAll(true) : setCheckAll(false)

    onchange ? onchange(tempValue || []) : null
  }

  const onCheckAll = () => {
    if (onchange) {
      if (!checkAll) {
        const tempValue = options.map((item) => item[getOptionValue])
        onchange(tempValue)
      } else {
        onchange([])
      }
    }
    setCheckAll(!checkAll)
  }

  const [searchTerms, setSearchTerms] = useState('')
  const [filteredOptions, setFilteredOptions] = useState(options)
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(event.target.value)
  }

  useEffect(() => {
    const temp = filter(options).filter(
      (item: any) => item.label.toLowerCase().includes(searchTerms.toLowerCase()) // Case-insensitive search
    )
    setFilteredOptions(temp) // Update filtered options based on search
  }, [searchTerms, options])

  function pascalCase(str: string): string {
    return str.replace(/\s+/g, '')
  }

  return (
    <div
      id='id-selectMulti'
      className={classNames('dropdown ' + dropdownPosition, className, {
        dropdown__isDisabled: isDisabled,
      })}
    >
      <div className='concise-SelectMulti' tabIndex={0}>
        <div className='concise-SelectMultiPlaceholder'>
          {!(selectedOption && selectedOption.length > 0) && placeholder}
        </div>
        <div className='concise-SelectMultiIcon'>
          <Icon type={'ChevronDown'} />
        </div>
        <div
          className={`concise-SelectMultiInput ${
            selectedOption && selectedOption.length > 0
              ? 'concise-SelectMultiInputLowPad'
              : 'concise-SelectMultiInputHighPad'
          }`}
          data-value='asd'
        >
          {selectedOption && selectedOption.length > 0 && (
            <>
              {checkAll ? (
                <span className='concise-SelectMultiLabel'>
                  <p>{customCheckAllTagLabel || 'All options selected'}</p>
                  <Icon type='Cross' size='xtraSmall' onClick={() => onCheckAll()} />
                </span>
              ) : (
                selectedOption.map((selected, index) => (
                  <span key={index} className='concise-SelectMultiLabel'>
                    <p>{selected[getOptionLabel] as React.ReactNode}</p>
                    <Icon
                      type='CrossAlt'
                      size='xtraSmall'
                      onClick={() => onSelectChild(selected)}
                      data-testid={selected[getOptionLabel]}
                    />
                  </span>
                ))
              )}
            </>
          )}
          {/* <input
            type='text'
            name='searchTerm'
            autoCapitalize='none'
            autoComplete='off'
            autoCorrect='off'
            id='dropdownBasic'
            spellCheck='false'
            aria-autocomplete='list'
            aria-expanded='false'
            aria-haspopup='true'
            role='combobox'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          /> */}
        </div>
      </div>
      <div className={'menu p-0'}>
        <div tabIndex={0} className={'dropdown-content w-full'}>
          <Search
            className='search-checkbox'
            name='searchCheckbox'
            searchedKeyword={searchTerms}
            onSearchChange={handleSearchChange}
          />
          <ul>
            {/* {isClear && !query && filter(options).length > 0 && (
            <li key='items-clear' onClick={() => onCheckAll()}>
              <div
                className={`concise-SelectMultiChild ${
                  checkAll ? 'concise-SelectMultiChildActive' : ''
                }`}
              >
                {' '}
                <Input
                  type='checkbox'
                  checked={checkAll}
                  onChange={() => onCheckAll()}
                  invert={true}
                />
                {customCheckAllLabel
                  ? customCheckAllLabel
                  : !checkAll
                  ? 'Check All'
                  : 'Uncheck All'}
              </div>
            </li>
          )} */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => onSelectChild(option)}
                  data-testid={pascalCase(option[getOptionLabel] as string)}
                >
                  <div
                    className={`concise-SelectMultiChild ${
                      value?.includes(option[getOptionValue])
                        ? 'concise-SelectMultiChildActive'
                        : ''
                    }`}
                  >
                    <Input
                      type='checkbox'
                      checked={value ? value.includes(option[getOptionValue]) : false}
                      onClick={() => onSelectChild(option)}
                      onChange={() => onSelectChild(option)}
                      invert={true}
                      name={option[getOptionLabel] as string}
                    />
                    {option[getOptionLabel] as React.ReactNode}
                  </div>
                </li>
              ))
            ) : (
              <li key='no-items-found'>
                <div className={'concise-SelectMultiChild'}>No items found</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
