import React from 'react';

export default function Form(props) {
  const {formValues, onInputChange} = props;

  return (
    <form>
      <input value={formValues.item} onChange={onInputChange} name="todo" />{" "}
      <br />
      <button type="submit">Add New Task</button>
    </form>
  );
}