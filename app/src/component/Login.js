import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Login() {
  const dispatch = useDispatch();

  function loginSubmit() {
    dispatch(
      login({
        name: "duythanh",
        age: 0,
        email: "duythanh@.email.com",
      }),
    );
  }

  function logoutSubmit() {
    dispatch(logout());
  }

  return (
    <div>
      <button onClick={loginSubmit}>Login</button>
      <button onClick={logoutSubmit}>Logout</button>
    </div>
  );
}
