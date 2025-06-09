import { combineReducers, legacy_createStore } from 'redux';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const increment1 = {
  type: 'increment1',
};

const decrement1 = {
  type: 'decrement1',
};

const increment2 = {
  type: 'increment2',
};

const decrement2 = {
  type: 'decrement2',
};

const counter1Reducer = (state = 2, action) => {
  switch (action.type) {
    case 'increment1':
      return state + 1;
    case 'decrement1':
      return state - 1;
    default:
      return state;
  }
};

const counter2Reducer = (state = 4, action) => {
  switch (action.type) {
    case 'increment2':
      return state + 1;
    case 'decrement2':
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counter1Reducer, counter2Reducer });

export const store = legacy_createStore(rootReducer);

function App() {
  const counter1 = useSelector((state) => state.counter1Reducer);
  const counter2 = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter1 : {counter1}</div>
      <button onClick={() => dispatch(increment1)}>+</button>
      <button onClick={() => dispatch(decrement1)}>-</button>
      <div>Counter2 : {counter2}</div>
      <button onClick={() => dispatch(increment2)}>+</button>
      <button onClick={() => dispatch(decrement2)}>-</button>
    </>
  );
}

export default App;
