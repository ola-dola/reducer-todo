const initialFormValues = {
  item: "",
  completed: "",
  id: ""
};

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ],
  formValues: initialFormValues,
};

export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
export const ON_SUBMIT = "ON_SUBMIT";

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
    case ON_SUBMIT:
      return {
        todos: state.todos.concat(state.formValues),
        formValues: initialFormValues,
      }
    default:
      return state;
  }
}
