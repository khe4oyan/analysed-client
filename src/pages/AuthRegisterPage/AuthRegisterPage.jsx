// libs
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// constants
import SERVER from "../../constants/api";
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function AuthRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  const onLogin = () => {
    if (email && password && fullName) {
      fetch(`${SERVER}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          full_name: fullName
        }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (d?.success) {
            navigate(ROUTES.AUTH_LOGIN);
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

      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <button onClick={onLogin}>login</button>

      <Link to={ROUTES.AUTH_REGISTER}>Go to register</Link>
    </div>
  );
}
