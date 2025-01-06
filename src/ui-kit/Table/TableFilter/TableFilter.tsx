import { useEffect, useRef } from 'react'
import { Button, FormField } from 'ui-kit'
import { FilterTable } from 'types'
import './TableFilter.scss'

type TableFilterProps = {
  options: FilterTable[]
  sizeParam: string
  updateFilters?: (key: string, value: string) => void
  tableFilterButton?: string
  onTableFilterButtonClick?: (event: React.MouseEvent) => void
}

export const TableFilter = ({
  options,
  sizeParam,
  updateFilters,
  tableFilterButton,
  onTableFilterButtonClick,
}: TableFilterProps) => {
  const updateFilter = (key: string, value: string) => {
    updateFilters ? updateFilters(key, value) : null
  }

  const checkCollapseRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (sizeParam && checkCollapseRef && checkCollapseRef.current) {
      checkCollapseRef.current.checked = true
    }
  }, [sizeParam])

  return (
    <div className='conciseTableFilter'>
      <div className='conciseTableFilterContent'>
        <div className='conciseTableFilterContentLeft'>
          {options &&
            options?.map((option, index) => (
              <div key={index} className='conciseTableFilterContentItem'>
                {option.type === 'text' ? (
                  <FormField
                    name={option.name}
                    placeholder={option.placeholder}
                    label={option.label}
                    value={option.value}
                    type={option.type}
                    onChange={(e) => updateFilter(option.name, e.target.value)}
                    className='w-full'
                  />
                ) : (
                  <FormField
                    name={option.name}
                    placeholder={option.placeholder}
                    label={option.label}
                    value={option.value}
                    type='select'
                    options={option.selectOption}
                    onChangeSelect={(e) => updateFilter(option.name, e)}
                    getOptionLabel={'name'}
                    getOptionValue={'idx'}
                    className='w-full'
                  />
                )}
              </div>
            ))}
        </div>
        <div className='conciseTableFilterContentButton'>
          <Button onClick={onTableFilterButtonClick} typeIconRight='Add'>
            {tableFilterButton}
          </Button>
        </div>
      </div>
    </div>
  )
}
