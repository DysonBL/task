import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./Hooks.css";

const UseRef = () => {
    const [inputValue, setInputValue] = useState("");
    const prevValue = useRef("");
    const count = useRef(0);

  
    useEffect(() => {
        count.current = count.current + 1;
        prevValue.current = inputValue;
    }, [inputValue]);
  const onSubmit=()=>{
    setInputValue()
  }
    return (
      <>
      <div className="ref">
      <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="head">
        <h3>Current Value: {inputValue}</h3>
        <h3>Previous Value: {prevValue.current}</h3><hr/>
        <h4>Nof Char:{count.current}</h4>
        </div>
        
        <Button onClick={onSubmit}>Submit</Button>

      </div>
       
      </>
    );
  }


export default UseRef;
