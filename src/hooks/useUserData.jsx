// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// hooks
import useToken from "./useToken";

// actions
import {setUserDataAction} from '../store/slices/userData.slice.js'

// constants
import SERVER from "../constants/api";
import ROUTES from "../constants/routes.js";

export default function useUserData() {
  const { userData } = useSelector(s => s.userDataSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      navigate(ROUTES.AUTH);
    }
    
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
          console.log(d?.message);
        }
      });
  }, [token]);

  return { userData };
}
