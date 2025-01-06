import { useEffect } from 'react'
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, setTheme } from 'utils/redux'
import { ToastContainer } from 'react-toastify'
import { ScaleLoader } from 'react-spinners'
import MainRoutes from 'utils/mainRoutes'
import ReactDOM from 'react-dom'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import { useAuth } from 'utils/getAuth'
import { getDropdownStatus, getDropdownChurch, getDropdownCoordType } from 'utils/getDropdownOpt'

const App = () => {
  const { isLoggedIn } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state: RootState) => state.loader.loading)
  const currentTheme = useSelector((state: RootState) => state.theme.theme)

  useEffect(() => {
    const isBrowserDefaulDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const getDefaultTheme = () => {
      const localStorageTheme = localStorage.getItem('default-theme')
      const browserDefault = isBrowserDefaulDark ? 'dark' : 'light'
      dispatch(setTheme(localStorageTheme || browserDefault))
    }
    getDefaultTheme()
  }, [dispatch])

  return (
    <div className={'theme-light'}>
      <div className='layout-wrapper '>
        <ToastContainer />
        <MainRoutes />
      </div>
      {loading &&
        ReactDOM.createPortal(
          <div className='loader-container'>
            <div className='loader-progres'>
              <ScaleLoader color='#4A7CDC' loading={loading} />
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default App
