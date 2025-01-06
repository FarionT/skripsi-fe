import { useNavigate } from 'react-router-dom';
import { getParentPath } from './getParentPath';
import { Toast } from 'ui-kit';

export const useErrorHandler = () => {
  const navigate = useNavigate();
  const parentPath = getParentPath();

  const handleErrorResponse = (res: any, parentRoute?: string, customHeader?: string) => {
    switch (res.status) {
      case 'ERR_NETWORK':
        break;
      case 401:
        Toast('Unauthorized', 'danger', 'Please re-login and try again.');
        localStorage.removeItem('erp_login')
        navigate('/login')
        break;
      case 403:
        Toast('Forbidden', 'danger', 'You do not have access to this resource. Please re-login and try again.')
        localStorage.removeItem('erp_login')
        setTimeout(() => {
          navigate('/login')
        }, 100);
        break;
      case 404:
        Toast('Not Found', 'danger', res.data.message);
        setTimeout(() => {
          navigate(parentRoute ? parentRoute : parentPath);
        }, 100);
        break;
      case 400:
      case 422:
        Toast(customHeader || 'Something Went Wrong', 'danger', res.data.message);
        break;
      case 500:
      case 502:
        Toast('Try Again Later', 'danger', res.data.message);
        break;
    }
  };
  return handleErrorResponse;
};
