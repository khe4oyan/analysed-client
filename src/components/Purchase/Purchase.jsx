// libs
import { useState } from "react";
import { useDispatch } from "react-redux";

// hooks
import useUserData from "../../hooks/useUserData";
import useToken from "../../hooks/useToken";

// actions
import { 
  removePurchaseByIdAction,
  changeStatusByIdAction,
  editPurchaseByIdAction,
} from "../../store/slices/purchases.slice.js"; 

// constants
import SERVER from "../../constants/api";

// styles
import classes from "./styles.module.css";

export default function Purchase({ data }) {
  const {
    id,
    title,
    amount,
    status,
    // created_by_id,
    // approved_by_id,
    // created_at,
    // updated_at,
  } = data;

  const [isEditMode, setIsEditMode] = useState(false);
  const { userData } = useUserData();
  const { token } = useToken();
  const dispatch = useDispatch();

  if (isEditMode) {
    const onSave = (title, amount) => {
      dispatch(editPurchaseByIdAction([id, title, amount]));
    };

    return (
      <PurchaseEdit
        title={title}
        amount={amount}
        onSave={onSave}
        onClose={() => setIsEditMode(false)}
        token={token}
        id={id}
      />
    );
  }

  const isAdmin = userData.role === "admin";
  const isManager = userData.role === "manager";
  const isStaff = userData.role === "staff";
  const isController = isAdmin || isManager;

  const onEdit = () => {
    setIsEditMode(true);
  };

  const onSubmit = () => {
    fetch(`${SERVER}/purchase/submit/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          dispatch(changeStatusByIdAction([id, "submitted"]));
        } else {
          console.log(d?.message);
        }
      });
  };

  const onApproved = () => {
    fetch(`${SERVER}/purchase/approved/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          dispatch(changeStatusByIdAction([id, "approved"]));
        } else {
          console.log(d?.message);
        }
      });
  };

  const onRejected = () => {
    fetch(`${SERVER}/purchase/rejected/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.success) {
          dispatch(changeStatusByIdAction([id, "rejected"]));
        } else {
          console.log(d?.message);
        }
      });
  };

  const onDelete = () => {
    if (window.confirm("Delete purchase ?")) {
      fetch(`${SERVER}/purchase/delete/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((d) => {
          if (d?.success) {
            dispatch(removePurchaseByIdAction(id));
          } else {
            console.log(d?.message);
          }
        });
    }
  };

  return (
    <div className={classes.root}>
      <p>
        {title} (x{amount})
      </p>
      <p>{status}</p>

      <hr />

      {isStaff && status === "draft" && (
        <>
          <button onClick={onEdit}>edit</button>
          <button onClick={onSubmit}>submit</button>
        </>
      )}

      {isController && status === "submitted" && (
        <>
          <button onClick={onApproved}>approved</button>
          <button onClick={onRejected}>rejected</button>
        </>
      )}

      {((isStaff && status === "draft") || isAdmin) && (
        <button onClick={onDelete}>delete</button>
      )}
    </div>
  );
}

function PurchaseEdit({ title, amount, onSave, onClose, token, id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newAmount, setNewAmount] = useState(amount);

  const onClickSave = () => {
    fetch(`${SERVER}/purchase/edit/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newTitle,
          amount: newAmount,
        })
      })
        .then((r) => r.json())
        .then((d) => {
          if (d?.success) {
            onSave(newTitle, newAmount);
            onClose();
          } else {
            console.log(d?.message);
          }
        });
  };

  return (
    <div className={classes.root}>
      <input
        type="text"
        placeholder="New title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      /><br />

      <input
        type="text"
        placeholder="New amount"
        value={newAmount}
        onChange={(e) => setNewAmount(e.target.value)}
      /><br />

      <button onClick={onClickSave}>save</button>
      <button onClick={onClose}>cancel</button>
    </div>
  );
}
