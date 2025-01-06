import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, FormField, Toast } from 'ui-kit'
import { churchLogo, mainWallpapper } from 'ui-kit/assets/image';
import { useScaleLoader } from 'utils/getScaleLoader';
import { changePassword } from 'services/login.services';
import './SetupPassword.scss'
import packageJson from '../../../package.json'
import { useAuth } from 'utils/getAuth';
import { TLogin } from 'types'

type TSetupPasswordData = {
  old_password: string
  password: string
  confirm_password: string
}

const SetupPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLoader, hideLoader] = useScaleLoader();
  const oldPassword = location.state?.oldPassword || '';

  const tempState = localStorage.getItem('key_login')
  const loginstate: TLogin = tempState ? JSON.parse(tempState) : null
  const token = loginstate?.token;

  const [setupPasswordData, setSetupPasswordData] = useState<TSetupPasswordData>({ old_password: oldPassword, password: '', confirm_password: '' })
  const [errorMsg, setErrorMsg] = useState<TSetupPasswordData>({ old_password: '', password: '', confirm_password: '' })
  const [isNotValid, setIsNotValid] = useState(true);

  const passwordRegex = /^[0-9a-zA-Z]{6,}$/;

  const checkError = (name: string, value: string, label: string) => {
    let tempErrorMsg = ''
    if(!value) {
      tempErrorMsg = label +' harus diisi'
    }

    if (name === 'password' && value && !passwordRegex.test(value)) {
      tempErrorMsg = label +' harus memiliki minimal 6 karakter dan hanya mengandung huruf dan angka';
    }

    if(name == 'confirm_password' && value != setupPasswordData.password) {
      tempErrorMsg = label +' tidak cocok';
    }

    setErrorMsg({ ...errorMsg, [name]: tempErrorMsg })
  }

  const onChangeSetupPasswordData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLabel = e.target.dataset.label || '';

    setSetupPasswordData({
      ...setupPasswordData,
      [e.target.name]: e.target.value
    })
    checkError(e.target.name, e.target.value, inputLabel)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Add login logic here
    const tempData = {
      old_password: setupPasswordData.old_password,
      password: setupPasswordData.password,
      confirm_password: setupPasswordData.confirm_password,
    };

    showLoader();
    changePassword(tempData).then((res: any) => {
      if (res.status === 200) {
        Toast('Setup password berhasil', 'success', res.data.message);
        navigate('/login');
      } else if([400, 422, 500, 502].includes(res.status)) {
        let toastTitle = 'Setup password gagal';
        if([500, 502].includes(res.status)) {
          toastTitle = 'Terjadi kesalahan';
        }

        Toast(toastTitle, 'danger', res.data.message);        
      }
      hideLoader();
    });
  }

  useEffect(() => {
    if(!token) {
      navigate('/login');
    }
  }, [token, navigate])

  useEffect(() => {
    setIsNotValid(setupPasswordData.old_password && setupPasswordData.password 
      && setupPasswordData.confirm_password && !errorMsg.old_password && !errorMsg.password && !errorMsg.confirm_password ? false : true)
  }, [setupPasswordData, errorMsg])

  return (
    <div className='setup-password-container' style={{ backgroundImage: `url('${mainWallpapper}')` }}>
      <div className='setup-password-layout'>
        <div className="setup-password-wrapper">
          <div className="auth-main-logo">
            <img src={churchLogo} alt="Logo Laurensius" />
          </div>
          <div className='setup-password-form'>
            <form onSubmit={handleSubmit}>
              <div className='setup-password-header-title'>Pengaturan Password</div>
              <FormField
                onChange={onChangeSetupPasswordData}
                placeholder='Masukkan password Anda saat ini'
                label='Password Lama'
                textAreaSize='large'
                type='password'
                name='old_password'
                value={setupPasswordData.old_password}
                error={errorMsg?.old_password}
              />
              <FormField
                onChange={onChangeSetupPasswordData}
                placeholder='Masukkan password baru'
                label='Password Baru'
                textAreaSize='large'
                type='password'
                name='password'
                error={errorMsg?.password}
              />
              <FormField
                onChange={onChangeSetupPasswordData}
                placeholder='Masukkan kembali password Anda'
                label='Konfirmasi Password'
                textAreaSize='large'
                type='password'
                name='confirm_password'
                error={errorMsg?.confirm_password}
              />
              <Button className='setup-password-btn' isDisabled={isNotValid}>
                Login
              </Button>
            </form>
          </div>
          <div className="app-version">
            V {packageJson.version}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetupPassword
