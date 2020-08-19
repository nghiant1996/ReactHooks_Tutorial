import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Play football'},
    {id: 2, title: 'Hang out with girl friend'},
    {id: 3, title: 'Go to the bed'}
  ])

  function handleTodoClick(todo){
    const index = todoList.findIndex( x => x.id === todo.id);
    if(index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  
  return (
    <div className="App">
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
