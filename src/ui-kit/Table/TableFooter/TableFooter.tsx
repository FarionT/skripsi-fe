import { SelectBasic, Button } from 'ui-kit'
import classNames from 'classnames'
import './TableFooter.scss'

export type TableFooterSize = 'big' | 'small'

type TableFooterProps = {
  footerSize?: TableFooterSize
  limitOptions?: number[]
  limitValue?: number | string
  range: (number | string)[]
  setPage: (e: number) => void
  setLimit: (e: number) => void
  page: number
}

export const TableFooter = ({
  footerSize = 'small',
  limitOptions = [5, 10, 15],
  limitValue,
  range,
  setPage,
  setLimit,
  page,
}: TableFooterProps) => {
  return (
    <div className='conciseTableFooter'>
      {range.length !== 0 ? (
        <>
          <div>
            <label htmlFor='setlimit'>Show</label>
            <SelectBasic
              name='setlimit'
              onChange={(e) => setLimit(+e.currentTarget.value)}
              className={`mx-2 left${footerSize}`}
              options={limitOptions}
              value={limitValue}
            />
            Items
          </div>
          <div className={'concisePaginationRight'}>
            <Button
              buttonType='frameless'
              buttonSize={footerSize}
              typeIcon='AngleLeft'
              className={classNames(`mr-6 concisePaginationRightButton nextBack ${footerSize}`)}
              onClick={() => setPage(+page - 1)}
              isDisabled={+page === 1}
            >
              Back
            </Button>
            <div className='hidden sm:flex'>
              {range.map((el, index) =>
                typeof el === 'number' ? (
                  <Button
                    key={index}
                    buttonType='frameless'
                    buttonSize={footerSize}
                    className={classNames(`mr-1 concisePaginationRightButton ${footerSize}`, {
                      concisePaginationRightActive: page == el,
                    })}
                    onClick={() => setPage(el)}
                  >
                    {el}
                  </Button>
                ) : (
                  <Button
                    key={index}
                    buttonType='frameless'
                    buttonSize={footerSize}
                    className={classNames(`mr-1 concisePaginationRightButton ${footerSize}`)}
                  >
                    {el}
                  </Button>
                )
              )}
            </div>
            <div className='block sm:hidden'>
              <Button
                buttonType='frameless'
                buttonSize={footerSize}
                className={classNames(`mr-1 concisePaginationRightButton ${footerSize}`)}
              >
                {page}
              </Button>
            </div>
            <Button
              buttonType='frameless'
              buttonSize={footerSize}
              typeIconRight='AngleRight'
              className={classNames(`ml-5 concisePaginationRightButton nextBack ${footerSize}`)}
              onClick={() => setPage(+page + 1)}
              isDisabled={+page === range[range.length - 1]}
            >
              Next
            </Button>
          </div>
        </>
      ) : null}
    </div>
  )
}
