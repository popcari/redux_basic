import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  // use global state
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div>
      <h1 style={{ color: themeColor }}>Profile</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}
