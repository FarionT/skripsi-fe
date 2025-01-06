import { useLocation } from 'react-router-dom';

export const getParentPath = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const url = location.pathname;
  return url.split('/').slice(0, 2).join('/');
};