import { createStore } from "https://cdn.skypack.dev/redux";

const initState = 0;

// reducer
function counterReducer(state = initState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
      break;
    case "WITHDRAW":
      return state - action.payload;
      break;
    default:
      return state;
  }
}

// store
const store = (window.store = createStore(counterReducer));

function deposit(payload) {
  return {
    type: "DEPOSIT",
    payload: payload,
  };
}

function withdraw(payload) {
  return {
    type: "WITHDRAW",
    payload: payload,
  };
}

const depositBtn = document.querySelector("#dep");
const withdrawBtn = document.querySelector("#with");

depositBtn.onclick = function () {
  store.dispatch(deposit(10));
  render();
};

withdrawBtn.onclick = function () {
  store.dispatch(withdraw(10));
};

// subscribe
store.subscribe(() => {
  console.log("state changed");
});

function render() {
  const output = document.querySelector("#output");
  output.innerText = store.getState();
}

render();
