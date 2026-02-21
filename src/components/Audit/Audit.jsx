// hooks
import useUserDataById from '../../hooks/useUserDataById';
import useUserData from '../../hooks/useUserData';

// styles
import classes from "./styles.module.css";

export default function Audit({ data }) {
  const { 
    // id, 
    user_id, 
    details, 
    // created_at, 
    // updated_at
  } = data;

  const { userData: user } = useUserData();

  const {userData} = useUserDataById(user_id);
  console.log(userData);
  
  return (
    <div className={classes.root}>
      <p>{userData?.full_name ?? "(deleted user)"} {user.id === user_id && "(You)"}</p>
      <p>{details}</p>
    </div>
  );
}
