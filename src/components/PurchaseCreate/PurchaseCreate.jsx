// libs
import { useState } from "react";
import { useDispatch } from "react-redux";

// hooks
import useToken from "../../hooks/useToken";

// actions
import { addNewPurchaseAction } from '../../store/slices/purchases.slice.js';

// constants
import SERVER from "../../constants/api";

// styles
import classes from "./styles.module.css";

export default function PurchaseCreate() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(1);

  const { token } = useToken();
  const dispatch = useDispatch();

  const onCreate = () => {
    fetch(`${SERVER}/purchase/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        amount,
      })
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          dispatch(addNewPurchaseAction(d.purchaseData));
        } else {
          console.log(d?.message);
        }
      });
  };

  return (
    <div className={classes.root}>
      <h3>Create purchase</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={onCreate}>create</button>
    </div>
  );
}
