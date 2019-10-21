const initialState = { name: "Gaurav Khurana", age: 35 }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      debugger;
      return state.set("name", action.name);
    case "SET_AGE":
      debugger; 
      return state.set("age", action.age);
    default:
      return state;
  }
};
