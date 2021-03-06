import React, { useEffect, useState } from "react";
import Form from "./Form";
import HeaderOfApp from "./HeaderOfApp";
import Layout from "./Layout";
import Lists from "./Lists";

function ShoppingList() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  //Getting from local storage
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos' ))

    if(getTodos) {
      setTodos(getTodos)
    }
  }, [])

  //Saving to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const submitHandler = (e) => {
    e.preventDefault();

    if(todo.length < 2) {
      setError("At least 2 letters in word required!")
      return false;
    } else if (todo.length > 15) {
      setError("Max letters 15!")
      return false;
    }

    setTodos([{ id: Date.now(), title: todo, done: false}, ...todos]);

    setError(null);
    setTodo('');
  }

  const doneHandler = (todoId) => {
    const index = todos.findIndex(item => item.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    setTodos(duplicateTodos);
  }

  const delHandler = (todoId) => {
    if(window.confirm('Are you sure?')) {
      const updatedTodos = todos.filter(item => item.id !== todoId);

      setTodos(updatedTodos);
    }
  }

  const deleteAll = () => {
    if(window.confirm('Are you sure?')) {

      setTodos([]);
    }
}

  const update = (todoId) => {
    const newName = prompt("New name?");
    const updateName = todos.filter(item => item.id === todoId)[0].title;
    const checker = JSON.stringify(todos).replace(updateName, newName);
    const updating = JSON.parse(checker);
    setTodos(updating);
  }

  return (
    <Layout>
      <HeaderOfApp/>
      <Form 
        todo={todo}
        change={(e) => setTodo(e.target.value)}
        submit={submitHandler}
        error={error}
      />
      <Lists 
        done={doneHandler} 
        del={delHandler}
        todos={todos}
        delAll={deleteAll}
        update={update}
      />
    </Layout>
  );
}

export default ShoppingList;
