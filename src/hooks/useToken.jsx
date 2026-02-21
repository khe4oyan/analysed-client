// libs
import { useDispatch, useSelector } from "react-redux";

// actions
import {setTokenAction } from '../store/slices/userData.slice.js';

export default function useToken() {
  const { token } = useSelector(d => d.userDataSlice); 
  const dispatch = useDispatch();

  const updateToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    
    dispatch(setTokenAction(newToken));
  };

  return { token, updateToken };
}
