// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// actions
import { setPurchasesAction } from '../store/slices/purchases.slice.js';

// hooks
import useToken from "./useToken";

// constants
import SERVER from "../constants/api";

export default function usePurchases(userData) {
  const { token } = useToken();
  const { purchases } = useSelector(s => s.purchasesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) return;

    fetch(`${SERVER}/purchase/list`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          dispatch(setPurchasesAction(d.purchases));
        } else {
          console.log(d?.message);
        }
      });
  }, [userData]);

  return { purchases };
}
