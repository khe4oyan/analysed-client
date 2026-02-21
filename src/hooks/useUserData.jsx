// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// hooks
import useToken from "./useToken";

// actions
import {setUserDataAction} from '../store/slices/userData.slice.js'

// constants
import SERVER from "../constants/api";

export default function useUserData() {
  const { userData } = useSelector(s => s.userDataSlice);
  
  const dispatch = useDispatch();
  const { token } = useToken();

  useEffect(() => {
    if (!token) return;
    
    fetch(`${SERVER}/auth/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          dispatch(setUserDataAction(d.userData));
        } else {
          alert(d?.message);
        }
      });
  }, [token]);

  return { userData };
}
