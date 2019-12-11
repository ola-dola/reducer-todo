import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer, ON_INPUT_CHANGE } from "./reducers/index";
import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onInputChange = event => {
    dispatch({
      type: ON_INPUT_CHANGE,
      payload: {value: event.target.value},
    })
  }
  return (
    <div className="App">
      <TodoList todos={state.todos} />
      <Form formValues={state.formValues} onInputChange={onInputChange} />
    </div>
  );
}

export default App;
