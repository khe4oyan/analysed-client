// libs
import { useState } from "react";

export default function useToken() {
  const [token, setToken] = useState(localStorage.getItem("token") ?? null);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  return { token, updateToken };
}
