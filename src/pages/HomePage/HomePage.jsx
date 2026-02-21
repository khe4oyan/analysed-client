// libs
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// components
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

// hooks
import useToken from '../../hooks/useToken';
import useUserData from '../../hooks/useUserData';

// constants
import ROUTES from '../../constants/routes';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  const { token } = useToken();
  const navigate = useNavigate();
  const {userData} = useUserData();

  useEffect(() => {
    if (token === null) {
      navigate(ROUTES.AUTH);
    }
  }, [token]);

  return (
    <div className={classes.root}>
      <Header />
      <UserCard data={userData}/>
      <Outlet />
    </div>
  )
}