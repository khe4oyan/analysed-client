// styles
import classes from './styles.module.css';

export default function UserCard({ data }) {
  if ( data === null) return <h3>Loading..</h3>

  const {
    full_name,
    email,
    role,
  } = data;
  
  return (
    <div className={classes.root}>
      <h2>{full_name}</h2>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  )
}