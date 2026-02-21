// libs
import { useState } from "react";

export default function useToken() {
  const [token, setToken] = useState(localStorage.getItem("token") ?? null);

  const updateToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    
    setToken(newToken);
  };

  return { token, updateToken };
}
