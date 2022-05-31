import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";


const Callback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(30);

  const increment = useCallback(() => {
    setCount(count + 1);
    console.log("page rended increment")
  }, [count]);
  const decrement = useCallback(() => {
    setNumber(number - 1);
    console.log("page decremen")

  },[number]);

  
   return (
    <div>
      <h1>React Callback</h1>
      <div>
        <p>Increse value:{count}</p>

        <Button onClick={increment}>increment</Button>
        <hr />
        <p>Decrese value:{number}</p>

        <Button onClick={decrement}>decrement</Button>
        <hr />
      </div>
    </div>
  );
};

export default Callback;
