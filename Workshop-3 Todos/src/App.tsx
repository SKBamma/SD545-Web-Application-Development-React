
import { useEffect, useState } from 'react';
import './App.css';
import { Todo } from './types';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);

  };

  const updateTodo = (id: string, done: boolean) => {
    //find the todo which is check and change done to be ondone
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const deleteTodoById = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateAll = (value: boolean) => {
    setTodos(todos.map(todo => ({ ...todo, done: value })));
  };

  const deleteFinishedTodos = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('http://localhost:9000/todos');
      const data = await response.json();
      setTodos(data);
      console.log(data);
    }
    getTodos();
  }, []);
  return (

    <div className="todo-container">
      <div className="todo-wrap">

        <Header onAddNewTodo={onAddNewTodo} />

        <List todos={todos} onUpdateTodo={updateTodo} onDeleteToDoById={deleteTodoById} />

        < Footer todos={todos} onUpdateAll={updateAll} onDeleteFinishedTodos={deleteFinishedTodos} />

      </div>
    </div >

  );
}

export default App;
