import { useDispatch } from 'react-redux'
import { setLoading } from 'utils/redux/slice/loader.slice'

type UseLoaderReturnType = [() => void, () => void]

export const useScaleLoader = (): UseLoaderReturnType => {
  const dispatch = useDispatch()
  const showLoader = () => {
    dispatch(setLoading(true))
  }
  const hideLoader = () => {
    dispatch(setLoading(false))
  }
  return [showLoader, hideLoader]
}
