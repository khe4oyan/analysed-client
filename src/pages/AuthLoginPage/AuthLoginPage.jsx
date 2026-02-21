// libs
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// hooks
import useToken from "../../hooks/useToken";

// constants
import SERVER from "../../constants/api";
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function AuthLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { updateToken } = useToken();

  const navigate = useNavigate();

  const onLogin = () => {
    if (email && password) {
      fetch(`${SERVER}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (d?.success) {
            updateToken(d.token);
            navigate(ROUTES.HOME);
          } else {
            alert(d?.message);
          }
        });
    } else {
      alert("Invalid inputs");
    }
  };

  return (
    <div className={classes.root}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={onLogin}>login</button>

      <Link to={ROUTES.AUTH_REGISTER}>Go to register</Link>
    </div>
  );
}
