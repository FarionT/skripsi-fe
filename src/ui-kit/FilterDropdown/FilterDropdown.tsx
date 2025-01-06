import React, { useState, useEffect } from 'react'
import { Button, Icon, Search } from 'ui-kit'
import './FilterDropdown.scss'
import classNames from 'classnames'

interface IFilterContent {
  id: string
  title: string
  status?: boolean
  date?: string
  value?: string
}

export interface IFilterDropdownOptions {
  id: string
  title: string
  content: IFilterContent[]
  isDate?: boolean
  isRadio?: boolean
}

interface IFilterDropdownProps {
  options: IFilterDropdownOptions[]
  className?: string
  functionReset: () => void
  functionChecked: (pId: string, id: string, value: boolean) => void
  handleDateChange: (id: string, value: string) => void
  functionRadio: (pId: string, id: string, value: boolean) => void
  filterCount?: number
  filterText?: string
  maxDisplay?: number
  isShowMoreEnable?: boolean
  isSearchEnable?: boolean
}

export const FilterDropdown: React.FC<IFilterDropdownProps> = ({
  className,
  options,
  functionReset,
  functionChecked,
  handleDateChange,
  functionRadio,
  filterCount = 0,
  filterText,
  maxDisplay = 10,
  isShowMoreEnable = true,
  isSearchEnable = false
}) => {
  const [openCollapses, setOpenCollapses] = useState<Set<string>>(new Set())
  const [formData, setFormData] = useState(options)
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({})
  const [seeMoreStates, setSeeMoreStates] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    setFormData(options)
  }, [options])

  const toggleCollapse = (id: string) => {
    setOpenCollapses((prev) => {
      const newOpenCollapses = new Set(prev)
      if (newOpenCollapses.has(id)) {
        newOpenCollapses.delete(id)
      } else {
        newOpenCollapses.add(id)
      }
      return newOpenCollapses
    })
  }

  const handleReset = () => {
    const resetData = options.map((opt) => ({
      ...opt,
      content: opt.content.map((c) => ({ ...c, status: false, date: '' })),
    }))
    setFormData(resetData)
    setSearchTerms({})
    setSeeMoreStates({})
    functionReset()
  }

  const handleCheckedChange = (pId: string, id: string, value: boolean) => {
    setFormData((prevFormData) =>
      prevFormData.map((opt) =>
        opt.id === pId
          ? {
            ...opt,
            content: opt.content.map((c) => (c.id === id ? { ...c, status: value } : c)),
          }
          : opt
      )
    )
    functionChecked(pId, id, value)
  }

  const handleRadioChange = (pId: string, id: string, value: boolean) => {
    setFormData((prevFormData) =>
      prevFormData.map((opt) =>
        opt.id === pId
          ? {
            ...opt,
            content: opt.content.map((c) =>
              c.id === id ? { ...c, status: value } : { ...c, status: false }
            ),
          }
          : opt
      )
    )
    functionRadio(pId, id, value)
  }

  const handleSearchChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerms((prevSearchTerms) => ({
      ...prevSearchTerms,
      [id]: event.target.value,
    }))
  }

  const filterContent = (content: IFilterContent[], query: string) => {
    if (!query) return content
    return content.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
  }

  const handleSeeMoreToggle = (id: string) => {
    setSeeMoreStates((prevSeeMoreStates) => ({
      ...prevSeeMoreStates,
      [id]: !prevSeeMoreStates[id],
    }))
  }

  return (
    <div
      id='id-filterDropdown'
      className={classNames('dropdown concise-dropdown', className)}
      tabIndex={0}
    >
      <label className={`filter-button ${filterCount !== 0 && 'filter-button-blue'}`}>
        <div className='filter-text'>
          <Icon type='Filter' />
          <span className='filter-button-text'>{filterText ?? 'Filter'}</span>
        </div>
        {filterCount !== 0 && <p className='filter-button-tags'>{filterCount}</p>}
      </label>
      <ul className='dropdown-content'>
        <li className='header-filter'>
          <div className='header-title'>Filters</div>
          <div className='header-subtitle' onClick={handleReset}>
            Reset
          </div>
        </li>
        {formData.map((opt) => {
          const isOpen = openCollapses.has(opt.id)
          const filteredContent = filterContent(opt.content, searchTerms[opt.id] || '')
          const shouldShowSeeMore = isShowMoreEnable
          const isSeeMoreVisible = seeMoreStates[opt.id]
          const displayedContent = isSeeMoreVisible ? filteredContent : filteredContent.slice(0, maxDisplay)

          return (
            <div className='collapse' key={opt.id}>
              <input type='checkbox' className='collapse-input' id={`collapse-input-${opt.id}`} />
              <div
                className='collapse-titleContainer'
                onClick={() => toggleCollapse(opt.id)}
                data-testid={opt.title}
              >
                <label className='collapse-title' htmlFor={`collapse-input-${opt.id}`}>
                  {opt.title}
                  <Icon type={isOpen ? 'AngleUp' : 'AngleDown'} />
                </label>
              </div>
              {isOpen && (
                <div className='collapse-content'>
                  <div className='content-filter'>
                    {opt.isDate ? (
                      <div className='date-content'>
                        {filteredContent.map((date, index) => (
                          <div key={date.id} className='date-item'>
                            <span className='date-header'>{date.title}</span>
                            <input
                              type='date'
                              id={date.title}
                              value={date.date || ''}
                              className='date-picker'
                              onChange={(e) => handleDateChange(date.id, e.target.value)}
                              max={index === 0 ? opt.content[1].date : undefined}
                              min={index === 1 ? opt.content[0].date : undefined}
                              data-testid={opt.title}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className='content-checkbox'>
                        <div className="flex-column">
                        {isSearchEnable ? (
                          <Search
                            className='search-checkbox'
                            name='searchCheckbox'
                            searchedKeyword={searchTerms[opt.id] || ''}
                            onSearchChange={(event) => handleSearchChange(opt.id, event)}
                          />
                        ) : (
                          ''
                        )}
                        {opt.isRadio ? (
                          <>
                            {displayedContent.map((c) => (
                              <label className='label-container' key={c.id}>
                                <input
                                  type='radio'
                                  name={`radio-group-${opt.id}`}
                                  onChange={(e) =>
                                    handleRadioChange(opt.id, c.id, e.target.checked)
                                  }
                                  id={c.title}
                                  checked={!!c.status}
                                  data-testid={opt.title}
                                />
                                <span>{c.title}</span>
                              </label>
                            ))}
                          </>
                        ) : (
                          <>
                            {displayedContent.map((c) => (
                              <label className='label-container' key={c.id}>
                                <input
                                  type='checkbox'
                                  onChange={(e) =>
                                    handleCheckedChange(opt.id, c.id, e.target.checked)
                                  }
                                  id={c.title}
                                  checked={!!c.status}
                                  data-testid={opt.title}
                                />
                                <span>{c.title}</span>
                              </label>
                            ))}
                          </>
                        )}
                        {shouldShowSeeMore && (
                          <Button
                            className='see-more'
                            onClick={() => handleSeeMoreToggle(opt.id)}
                            buttonType='frameless'
                            buttonSize='small'
                          >
                            {isSeeMoreVisible ? 'See less' : 'See more'}
                          </Button>
                        )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default FilterDropdown
