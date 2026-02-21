// libs
import { Outlet } from 'react-router-dom';

// styles
import classes from './styles.module.css';

export default function AuthPage() {
  return (
    <div className={classes.root}>
      <h2>Authorization</h2>
      <Outlet />
    </div>
  )
}