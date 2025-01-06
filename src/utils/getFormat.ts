export const useDateFormat = (dateFormat: Date) => {
  // Get user from Redux store
  const year = dateFormat.getFullYear()
  const month = String(dateFormat.getMonth() + 1).padStart(2, '0') // Add 1 to month because it is zero-based
  const day = String(dateFormat.getDate()).padStart(2, '0')
  const hour = String(dateFormat.getHours()).padStart(2, '0')
  const minute = String(dateFormat.getMinutes()).padStart(2, '0')
  const formattedDate = `${day}/${month}/${year}, ${hour}:${minute}`

  return formattedDate
}

export const useDateFormatDatePicker = (dateFormat: Date) => {
  // Get user from Redux store
  const year = dateFormat.getFullYear()
  const month = String(dateFormat.getMonth() + 1).padStart(2, '0') // Add 1 to month because it is zero-based
  const day = String(dateFormat.getDate()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`

  return formattedDate
}

export const formatNumber = (num: number): string => {
  return num.toString().padStart(3, '0')
}
