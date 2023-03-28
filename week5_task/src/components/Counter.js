import React, { useReducer, useEffect } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'SUBTRACT':
      return { count: state.count - 1 };
    case 'MULTIPLY':
      return { count: state.count * 2 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('Component re-rendered');
  }, []);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
      <button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
    </div>
  );
}

export default Counter;
