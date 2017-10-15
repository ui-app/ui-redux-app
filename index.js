import { createStore, combineReducers } from "redux";

const initialState ={
  value: 5,
  arr: [],
  name: "Joe",
  age: 51
}
const mathReducer = (state={
  value: 5,
  arr: []
}, action) =>{
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


const userReducer = (state={
  name: "Joe",
  age: 51
}, action) =>{
  switch (action.type) {
    case "SET_NAME":
      state = {
                ...state,
                name: action.payload
              };
      break;
    case "SET_AGE":
      state = {
                ...state,
                age: action.payload,
                };
      break;
    default:
      break;
  }
  return state;
};



const store = createStore(combineReducers({mathReducer,userReducer}));

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
store.dispatch({
  type: "SET_AGE",
  payload: 64
});
store.dispatch({
  type: "SET_NAME",
  payload: "Kamar"
});
