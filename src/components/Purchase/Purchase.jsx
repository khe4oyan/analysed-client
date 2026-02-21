// styles
import classes from './styles.module.css';

export default function Purchase({ data }) {
  const {
    // id,
    title,
    amount, 
    status,
    // created_by_id,
    // approved_by_id,
    // created_at,
    // updated_at,
  } = data;
  
  return (
    <div className={classes.root}>
      <p>{title} (x{amount})</p>
      <p>{status}</p>
    </div>
  )
}