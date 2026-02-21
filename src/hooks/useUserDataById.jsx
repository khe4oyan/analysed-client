// libs
import { useEffect, useState } from "react";

// hooks
import useToken from "./useToken";

// constants
import SERVER from "../constants/api";

export default function useUserDataById(id) {
  const [userData, setUserData] = useState(null);
  const { token } = useToken();

  useEffect(() => {
    fetch(`${SERVER}/users/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          setUserData(d.userData);
        } else {
          console.log(d?.message);
        }
      });
  }, [token]);

  return { userData };
}
