// components
import Purchase from '../Purchase';

// hooks
import usePurchases from '../../hooks/usePurchases';
import useUserData from '../../hooks/useUserData';

// styles
import classes from './styles.module.css';

export default function PurchasesList() {
  const { userData } = useUserData();
  const { purchases } = usePurchases(userData);

  return (
    <div className={classes.root}>
      {purchases.map(purchase => 
        <Purchase key={purchase.id} data={purchase}/>
      )}
    </div>
  )
}