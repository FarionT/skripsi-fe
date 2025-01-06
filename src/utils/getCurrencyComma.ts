export const useCurrencyComma = (value: string) => {
  const addCommas = (num: string) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const removeNonNumeric = (num: string) => num.toString().replace(/[^0-9]/g, '')

  return addCommas(removeNonNumeric(value))
}
