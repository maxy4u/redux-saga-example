const initialState = { name: "Gaurav Khurana", age: 16 }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      debugger;
      return {...state, name: action.name };
    case "SET_AGE":
    case "RECEIVED_AGE":
      debugger; 
      return {...state, age: +action.age };
    default:
      return state;
  }
};
