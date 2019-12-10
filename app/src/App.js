import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/index';
import TodoList from './components/TodoList';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
