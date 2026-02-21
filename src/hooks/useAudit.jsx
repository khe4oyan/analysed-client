// libs
import { useEffect, useState } from "react";

// hooks
import useToken from "./useToken";

// constants
import SERVER from "../constants/api";

export default function useAudit() {
  const [audit, setAudit] = useState([]);
  const { token } = useToken();

  useEffect(() => {
    fetch(`${SERVER}/audit/list`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          setAudit(d.audit);
        } else {
          console.log(d?.message);
        }
      });
  }, []);

  return { audit };
}
