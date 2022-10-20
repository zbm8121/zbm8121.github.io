import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = {
  count: 0,
};

// Action creator
function incrementCounter(num) {
  return { type: "INCREMENT", num: num };
}

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.num };
    default:
      return state;
  }
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
const mapDispatchToProps = {
  incrementCounter,
};

const store = createStore(reducer);

const CounterComponent = connect(mapStateToProps, mapDispatchToProps)(Counter);

const el = (
  <Provider store={store}>
    <CounterComponent />
  </Provider>
);
root.render(el);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
