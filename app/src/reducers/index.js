export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ],
  formValues: {
    item: "",
    completed: "",
    id: ""
  }
};

export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
const ON_SUBMIT = "ON_SUBMIT";

export function reducer(state, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        formValues: {
          item: action.payload.value,
          completed: false,
          id: Date.now()
        }
      };
    default:
      return state;
  }
}
