import React, { useState } from "react";
export default function Addition() {
  let [set, setcheck] = useState(0);

  let increment = () => {
    setcheck(set + 1);
  };
  let decrement = () => {
    if (set !== 0) {
      setcheck(set - 1);
    }
  };
  let reset = () => {
    setcheck(0);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          height: "18vh",
          padding: "12px 0",
          boxShadow: "3px 1px 5px black",
        }}
      >
        <h2
          style={{
            fontFamily: "serif",
            paddingBottom: "5px",
          }}
        >
          {set}
        </h2>
        <div
          style={{
            fontFamily: "serif",
            fontWeight: "800",
            margin: "0px 15px",
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            font: "12px solid black",
            height: "6vh",
          }}
        >
          <button onClick={increment}>Add</button>
          <button onClick={decrement}>Dec</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </>
  );
}
