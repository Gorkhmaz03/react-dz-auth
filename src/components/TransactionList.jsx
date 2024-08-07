import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const TransactionList = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TransactionList;
