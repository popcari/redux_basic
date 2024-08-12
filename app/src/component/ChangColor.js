import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
import { toggleSpinner } from "../features/spinner";

export default function ChangColor() {
  const dispatch = useDispatch();

  const [color, setcolor] = useState("");

  function changeColorHanle() {
    dispatch(toggleSpinner(true));

    setTimeout(() => {
      dispatch(changeColor(color));
      // dispatch(toggleSpinner(false));
    }, 1000);
  }

  return (
    <>
      <input
        type="text"
        placeholder="type your color"
        onChange={(e) => {
          setcolor(e.target.value);
        }}
      />
      <button onClick={changeColorHanle}>ChangColor</button>
    </>
  );
}
