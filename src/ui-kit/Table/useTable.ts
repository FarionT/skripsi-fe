import { useState, useEffect } from 'react'

const { floor, min, max } = Math
const rangePage = (lo: number, hi: number) => Array.from({ length: hi - lo }, (_, i) => i + lo)
const pagination =
  (count: number, ellipsis = '…') =>
  (page: number, total: number) => {
    const start = max(1, min(page - floor((count - 3) / 2), total - count + 2))
    const end = min(total, max(page + floor((count - 2) / 2), count - 1))
    return [
      ...(start > 2 ? [1, ellipsis] : start > 1 ? [1] : []),
      ...rangePage(start, end + 1),
      ...(end < total - 1 ? [ellipsis, total] : end < total ? [total] : []),
    ]
  }

const calculateRange = (data: number, rowsPerPage: number) => {
  const range = []
  const num = Math.ceil(data / rowsPerPage)
  for (let i = 1; i <= num; i++) {
    range.push(i)
  }
  return range
}

const sliceData = <T>(data: T[], page: number, rowsPerPage: number) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

const useTable = <T>(
  data: T[],
  page: number,
  rowsPerPage: number,
  serach?: string,
  sortKey?: keyof T,
  dataLength?: number
) => {
  const [ellipsisRange, setEllipsisRange] = useState<(string | number)[]>([])
  const [slice, setSlice] = useState<T[]>([])

  useEffect(() => {
    sortKey ? data.sort((a: T, b: T) => (a[sortKey] > b[sortKey] ? 1 : -1)) : null
    const searchTerm = serach ? serach.toLowerCase() : ''
    let filteredData = data
    if (searchTerm !== '') {
      filteredData = data.filter((item) => {
        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            if (String(item[key]).toLowerCase().includes(searchTerm)) {
              return true
            }
          }
        }
        return false
      })
    }

    const dataRange = calculateRange(dataLength ? dataLength : filteredData.length, rowsPerPage)
    const ellipsisTempRange = pagination(5)(+page, dataRange.length)
    setEllipsisRange([...ellipsisTempRange])

    const tempSlice = sliceData(filteredData, page, rowsPerPage)
    setSlice([...tempSlice])
  }, [data, page, setSlice, rowsPerPage, dataLength, serach, sortKey])

  return { slice, range: ellipsisRange }
}

export default useTable
