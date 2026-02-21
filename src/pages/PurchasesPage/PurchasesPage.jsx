// components
import UserCard from '../../components/UserCard';
import PurchasesList from '../../components/PurchasesList';

// hooks
import useUserData from '../../hooks/useUserData';

// styles
import classes from './styles.module.css';

export default function PurchasesPage() {
  const { userData } = useUserData();

  return (
    <div className={classes.root}>
      <UserCard data={userData} />
      <PurchasesList />
    </div>
  )
}