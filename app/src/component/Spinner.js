import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Spinner() {
  const spinner = useSelector((state) => state.spinner.value);

  const [isSpinnerShow, setSpinnerShow] = useState(spinner);

  console.log("Current spinner value:", spinner); // Kiểm tra giá trị spinner

  useEffect(() => {
    console.log("useEffect chạy với giá trị spinner:", spinner); // Log để kiểm tra
    setSpinnerShow(spinner);
  }, [spinner]);

  return (
    <>
      {isSpinnerShow && (
        <div className="spinner">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
