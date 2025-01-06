import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, FormField, Icon, Tooltip, Toast } from 'ui-kit'
import { churchLogo, mainLogo, mainWallpapper } from 'ui-kit/assets/image'
import { useAuth } from 'utils/getAuth'
import { useScaleLoader } from 'utils/getScaleLoader'
import { login } from 'services/login.services'
import { LoginState } from 'interfaces/LoginState.interfaces'
import { useDispatch } from 'react-redux'
import { loginSuccess, setToken } from 'utils/slice/login.slice'
import './Login.scss'
import packageJson from '../../../package.json'

type TLoginData = {
  email: string
  password: string
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoggedIn } = useAuth()
  const [showLoader, hideLoader] = useScaleLoader()

  const [loginData, setLoginData] = useState<TLoginData>({ email: '', password: '' })
  const [errorMsg, setErrorMsg] = useState<TLoginData>({ email: '', password: '' })
  const [isNotValid, setIsNotValid] = useState(true)

  const checkError = (name: string, value: string, label: string) => {
    let tempErrorMsg = ''
    if (!value) {
      tempErrorMsg = label + ' harus diisi'
    }

    setErrorMsg({ ...errorMsg, [name]: tempErrorMsg })
  }

  const onChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLabel = e.target.dataset.label || ''

    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    checkError(e.target.name, e.target.value, inputLabel)
  }

  useEffect(() => {
    const isLoginDataValid =
      loginData.email && loginData.password && !errorMsg.email && !errorMsg.password ? false : true

    setIsNotValid(isLoginDataValid)
  }, [loginData, errorMsg])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    showLoader()

    // TODO: Add login logic here
    login(loginData.email, loginData.password)
      .then((res: any) => {
        if (res.status === 200) {
          const resData = res.data
          const userData = resData.data
          const initialState: LoginState = {
            isLoggedIn: true,
            user: {
              id: userData.id,
              user_registration_number: userData.user_registration_number,
              email: userData.email,
              phone_number: userData.phone_number,
              nick_name: userData.nick_name,
              full_name: userData.full_name,
              role: userData.role,
              status: userData.status,
              active: userData.active,
              is_pwd_resetted: userData.is_pwd_resetted,
            },
            token: resData.tokens.access.token,
            refresh: resData.tokens.refresh.token,
          }

          localStorage.setItem('key_login', JSON.stringify(initialState))
          dispatch(setToken(resData.tokens.access.token))
          if (!userData.is_pwd_resetted) {
            const updatedState = {
              ...initialState,
              isLoggedIn: false,
            }
            localStorage.setItem('key_login', JSON.stringify(updatedState))
            navigate('/setup-password', { state: { oldPassword: loginData.password } })
          } else {
            Toast('Login Sukses', 'success', res.data.message)
            dispatch(loginSuccess(initialState))
            if (userData?.role?.name == 'Viewer') {
              navigate('/')
            } else {
              navigate('/dashboard')
            }
          }
        } else if ([400, 422, 500, 502].includes(res.status)) {
          let toastTitle = 'Login gagal'
          if ([500, 502].includes(res.status)) {
            toastTitle = 'Terjadi kesalahan'
          }

          Toast(toastTitle, 'danger', res.data.message)
        }
      })
      .finally(() => {
        hideLoader()
      })
  }

  useEffect(() => {
    if (isLoggedIn) {
      if (user?.role?.name == 'Viewer') {
        navigate('/')
      } else {
        navigate('/dashboard')
      }
    }
  }, [isLoggedIn, user, navigate])

  return (
    <div className='login-container' style={{ backgroundImage: `url('${mainWallpapper}')` }}>
      <div className='login-layout'>
        <div className='login-wrapper'>
          <div className='auth-main-logo'>
            <img src={churchLogo} alt='Logo Laurensius' />
          </div>
          <div className='login-form'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='login-header-title'>Login</div>
              <FormField
                onChange={onChangeLoginData}
                placeholder='Email'
                label='Email'
                textAreaSize='large'
                type='text'
                name='email'
                error={errorMsg?.email}
              />
              <FormField
                onChange={onChangeLoginData}
                placeholder='Password'
                label='Password'
                type='password'
                name='password'
                error={errorMsg?.password}
              />
              <Button className='login-btn' isDisabled={isNotValid}>
                Login
              </Button>
            </form>
          </div>
          <div className='forgot-pwd-link'>
            <h4>Lupa Password?</h4>
            <p>
              Silahkan hubungi <Link to='#'>superadmin@santo-laurensius.org</Link> untuk reset
              password Anda.
            </p>
          </div>
          <div className='app-version'>V {packageJson.version}</div>
        </div>
        <div className='powered-by'>
          Powered by:{' '}
          <div className='powered-by-logo'>
            <Link to={'https://concise.co.id/'} target='_blank' rel="noreferrer"><img src={mainLogo} alt='Logo Concise' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
