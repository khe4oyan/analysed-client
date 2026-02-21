// libs
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// hooks
import useToken from '../../hooks/useToken';

// constants
import ROUTES from '../../constants/routes';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  const { token } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate(ROUTES.AUTH);
    }
  }, [token]);

  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  )
}