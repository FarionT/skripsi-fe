import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQueryParams } from 'utils/getQueryParams';
import { ColumnProps, FilterTable } from 'types';
import TableFilter from './TableFilter';
import TableFooter from './TableFooter';
import classNames from 'classnames';
import useTable from './useTable';
import './Table.scss';
import { useDebounce } from 'utils/getDebounce';

type TableProps<T> = {
  className?: string;
  columns: Array<ColumnProps<T>>;
  data: T[];
  datalength?: number;
  useApi?: boolean;
  useFilter?: boolean;
  useFooter?: boolean;
  filterOption?: FilterTable[];
  isLoading?: boolean;
  rowStriping?: boolean;
  columnBorder?: boolean;
  useBorder?: boolean;
  isCompact?: boolean;
  tableFilterButton?: string;
  pages?: number;
  limits?: number;
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  onTableFilterButtonClick?: (event: React.MouseEvent) => void;
  ignoreUrlParams?: boolean;
};

const default_filter: FilterTable[] = [
  {
    name: 'search',
    label: 'Search',
    type: 'text',
    placeholder: 'Search Item',
    className: '',
    value: '',
  },
  {
    name: 'sort',
    label: 'Sort By',
    type: 'select',
    placeholder: 'test place',
    className: '',
    value: '',
    selectOption: [
      { idx: '0', name: 'Row 1' },
      { idx: '1', name: 'Row 2' },
      { idx: '2', name: 'Row 3' },
    ],
  },
];

export const Table = <T,>({
  className,
  data,
  columns,
  datalength = 500,
  useApi = false,
  useFilter = true,
  useFooter = true,
  filterOption,
  isLoading = false,
  rowStriping = false,
  columnBorder = true,
  useBorder = true,
  isCompact = true,
  tableFilterButton,
  pages = 1,
  limits = 10,
  onPageChange,
  onLimitChange,
  onTableFilterButtonClick,
  ignoreUrlParams = false,
}: TableProps<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page = pages, limit = limits, search, sort } = useQueryParams();
  const searchDebounce = useDebounce(search);

  const actualPage = ignoreUrlParams ? pages : page;
  const actualLimit = ignoreUrlParams ? limits : limit;
  const actualSearch = ignoreUrlParams ? '' : searchDebounce;
  const actualSort = ignoreUrlParams ? '' : sort;

  const { slice, range } = useTable(
    data,
    actualPage as number,
    actualLimit as number,
    !useApi ? (actualSearch as string) : undefined,
    !useApi && actualSort ? (columns[actualSort as number].key as keyof T) : undefined,
    useApi ? datalength : undefined
  );
  const displayData = useApi ? data : slice;

  const memoFilter = useMemo(() => {
    const temp = filterOption || default_filter;
    return temp.map((option) =>
      option.name === 'search'
        ? { ...option, value: actualSearch ? actualSearch.toString() : '' }
        : option.name === 'sort'
          ? { ...option, value: actualSort ? actualSort.toString() : '' }
          : option
    );
  }, [actualSearch, actualSort, filterOption]);

  const updateFilters = (key: string, value: string) => {
    if (!ignoreUrlParams) {
      setSearchParams(
        (param) => {
          param.set(key, value + '');
          return param;
        },
        { replace: true }
      );
    }
  };

  const setPage = (e: number) => {
    onPageChange && onPageChange(e)
    if (!ignoreUrlParams) {
      setSearchParams(
        (param) => {
          param.set('page', e + '');
          return param;
        },
        { replace: true }
      );
    }
  };

  const setLimit = (e: number) => {
    onLimitChange && onLimitChange(e)
    setPage(1)
    if (+actualPage > range.length) {
      setPage(1);
    }
    if (!ignoreUrlParams) {
      setSearchParams(
        (param) => {
          param.set('limit', e + '');
          return param;
        },
        { replace: true }
      );
    }
  };

  // Filter out columns with key 'id'
  const filteredColumns = columns.filter(column => column.key !== 'id');

  const headers = filteredColumns.map((column, index) => (
    <th key={`headCell-${index}`} className='p-0'>
      <div className={`conciseTableTH ${(isCompact ? 'conciseTableTHCompact' : '')}`}>
        {column.title}
      </div>
    </th>
  ));

  const rows = isLoading ? (
    // Show a loading state
    <tr>
      <td colSpan={columns.length + 1}>
        <div className='nodata'>
          <div className='loading'></div>
        </div>
      </td>
    </tr>
  ) : !displayData?.length ? (
    <tr>
      <td colSpan={columns.length + 1}>
        <div className='nodata'>No data</div>
      </td>
    </tr>
  ) : (
    displayData?.map((row: any, index) => (
      <tr key={`row-${index}`}>
        {columns.map((column, index2) => {
          const value = column.render
            ? column.render(column, row as T)
            : (row[column.key as keyof typeof row] as string);

          return (
            <td key={`cell-${index2}`} className={column.collapse ? 'fit-cell' : ''}>
              <div className={`conciseTableTd ${(isCompact ? 'conciseTableTdCompact' : '')}`}>
                {value}
              </div>
            </td>
          );
        })}
      </tr>
    ))
  );

  return (
    <>
      {useFilter && (
        <TableFilter
          options={memoFilter}
          sizeParam={searchParams.toString()}
          updateFilters={updateFilters}
          tableFilterButton={tableFilterButton}
          onTableFilterButtonClick={onTableFilterButtonClick}
        />
      )}
      <div
        className={classNames('conciseTableContainer', className, {
          useFilter: useFilter,
          'conciseTableContainer-tableBorder': useBorder === true
        })}
      >
        <table
          className={classNames('conciseTable table-pin-rows', {
            'table-strip-rows': rowStriping === true,
            'table-border-column': columnBorder === true,
          })}
        >
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
          {useFooter && (
            <tfoot className='tableFooter'>
              {displayData.length !== 0 && <tr>
                <td colSpan={filteredColumns.length + 1}>
                  <div className='tableFooterContainer'>
                    <TableFooter
                      range={range}
                      setLimit={setLimit}
                      setPage={setPage}
                      page={actualPage as number}
                      limitValue={actualLimit}
                      limitOptions={[10, 25, 50]}
                    />
                  </div>
                </td>
              </tr>}
            </tfoot>
          )}
        </table>
      </div>
    </>
  );
};
