import { ReactElement } from 'react'

export interface ColumnProps<T> {
  key: string
  title: string | ReactElement
  collapse?: boolean
  render?: (column: ColumnProps<T>, item: T) => ReactElement
}

export type selectFilterOption = {
  idx: string
  name: string
}

export type FilterTable = {
  name: string
  label: string
  type: string
  placeholder: string
  className?: string
  value: string
  selectOption?: selectFilterOption[]
}

export type DropdownPosition = 'dropdown-end' | ''

export type ProductsType = {
  id: string;
  cover: string;
  name: string;
  body: string;
  price: string;
  colors: string[];
  tag: string[];
}

export type TModalProps = {
  visible: boolean
  toggle: () => void
}

export interface ErrorResponse {
  status: string | number
  data: unknown | ErrorResponseData
}

export interface ErrorResponseData {
  code: number
  message: string
}

export type SuccessResponse<T,D> = {
  code: number
  count?: number
  data?: T
  message: string
  token?: D
}