import { useState } from 'react'

type UseModalReturnType = [boolean, () => void]

export const useModal = (): UseModalReturnType => {
  const [visible, setVisible] = useState(false)
  const toggle = () => {
    setVisible(!visible)
  }
  return [visible, toggle]
}