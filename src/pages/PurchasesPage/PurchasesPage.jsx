// components
import PurchasesList from '../../components/PurchasesList';

// styles
import classes from './styles.module.css';

export default function PurchasesPage() {
  return (
    <div className={classes.root}>
      <PurchasesList />
    </div>
  )
}