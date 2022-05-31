import React, { useReducer } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const initialState = 0;

const Reducer = (state, action) => {
  switch (action) {
    case "Add":
      return state + 1;
    case "Dec":
      return state - 1;
    case "Clear":
      return 0;
    default:
      throw new Error("Your action is Wrong");
  }
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(Reducer, initialState);

  const onAdd = () => {
    dispatch("Add");
  };
  const onDec = () => {
    dispatch("Dec");
  };
  const onClear = () => {
    dispatch("Clear");
  };
  return (
    <div>
      <h1>React UseReducer</h1>
      <div className="reduce">
        <h1>{count}</h1>
        <hr />

        <Button className="add"onClick={onAdd}>Add</Button>
        <Button className="dec"onClick={onDec}>Dec</Button>
        <Button className="clear" onClick={onClear}>Clear</Button>
      </div>
    </div>
  );
};

export default UseReducer;
