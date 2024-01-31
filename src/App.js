import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice/slices";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment(10))}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement(10))}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
