import { createStore } from "redux";

const initialState ={
  value: 5,
  arr: []
}
console.log({...initialState})
const reducer = (state=initialState, action) =>{
  switch (action.type) {
    case "ADD":
      state = {
                ...state,
                value: state.value + action.payload,
                arr: [...state.arr, action.payload]
              };
      break;
    case "SUBTRACT":
      state = {
                ...state,
                value: state.value - action.payload,
                arr: [...state.arr, action.payload]
              };
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(()=>{
  console.log("Store updated!", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10
});
store.dispatch({
  type: "ADD",
  payload: 148
});
store.dispatch({
  type: "SUBTRACT",
  payload: 26
});
