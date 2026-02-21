// components
import PurchasesList from "../../components/PurchasesList";
import PurchaseCreate from "../../components/PurchaseCreate";

// hooks
import useUserData from "../../hooks/useUserData";

// styles
import classes from "./styles.module.css";

export default function PurchasesPage() {
  const { userData } = useUserData();

  return (
    <div className={classes.root}>
      {userData?.role === "staff" && <PurchaseCreate />}
      <PurchasesList />
    </div>
  );
}
