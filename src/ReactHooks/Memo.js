import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import "./Hooks.css";


const Memo = () => {
  const [number, setNumber] = useState(0);
  const [light, setLight] = useState(true);
  // const calculateData = plusFive(number)
  const incresValue = () => {
    setNumber((c) => c + 1);
  };
  const plusFive = (number) => {
    console.log("increse 5");
    return number + 5;
  };
  const calculateData = useMemo(
    () => {
      return plusFive(number);
    },
    [number]
  );
  return (
    <div className={light ? "light" : "dark"}>
      <h1>React UseMemo</h1>
      <p>Inc:{number}</p>
      <Button onClick={incresValue}>Increment</Button>
      <hr />
      <p>plusFive:{calculateData}</p>
      <div>
        <Button onClick={() => { setLight(!light)}}>
          darkmode
        </Button>
      </div>
    </div>
  );
};

export default Memo;
