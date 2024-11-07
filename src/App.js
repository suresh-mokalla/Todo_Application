import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todo, task];
    setTodo(newTodos);
    setTask('');
  };
  const deleteHandler=(indexValue)=>{
    const DeleteTodo=todo.filter((todo, index)=> index !== indexValue);
    setTodo(DeleteTodo);
  }
  return (
    <div className="App">
      <div>
        <h5>Todo Management Application</h5>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="task"
            value={task}
            onChange={changeHandler}
          />
          &nbsp;&nbsp;
          <input type="submit" name="Add" value="Add" />
        </form>
        <Todolist todolist={todo} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
}
export default App;
