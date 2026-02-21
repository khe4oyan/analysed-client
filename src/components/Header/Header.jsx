// libs
import { useNavigate } from "react-router-dom";

// hooks
import useToken from "../../hooks/useToken";

// constants
import SERVER from "../../constants/api";
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function Header() {
  const { token, updateToken } = useToken();
  const navigate = useNavigate();

  const logoutButton = () => {
    fetch(`${SERVER}/auth/logout`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success === true) {
          updateToken(null);
          navigate(ROUTES.AUTH);
        } else {
          console.log(d?.message);
        }
      });
  };

  return (
    <div className={classes.root}>
      <h2>Analysed</h2>

      <button onClick={logoutButton}>logout</button>
    </div>
  );
}
