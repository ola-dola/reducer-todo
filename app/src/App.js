import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer, ON_INPUT_CHANGE, ON_SUBMIT } from "./reducers/index";
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

  const handleSubmit = event => {
    event.preventDefault();

    dispatch({
      type: ON_SUBMIT
    })
  }
  
  return (
    <div className="App">
      <TodoList todos={state.todos} />
      <Form
        formValues={state.formValues}
        onInputChange={onInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
