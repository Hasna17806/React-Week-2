import React, { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };  
    case "DECREMENT":
      return { count: state.count - 1 };  
    case "RESET":
      return { count: 0 };                
    default:
      return state;                       
  }
}

function CounterApp() {
  // Step 2: useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 });  
  // state = current data (count), dispatch = function to send actions

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {state.count}</h1>

      {/* Step 3: Dispatch actions when buttons clicked */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default CounterApp;
