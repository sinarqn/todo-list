import { useEffect, useState } from "react";
import styled from 'styled-components'
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const savedTodos = localStorage.getItem('todos')

  useEffect(() => {
    savedTodos !== null && setTodos(JSON.parse(savedTodos))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (newTodoText) => {
    if(newTodoText === '') return
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: newTodoText,
      done: false
    }

    setTodos([...todos, newTodo])
  }

  const handleCheck = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Container>
      <AddTodo handleSubmit={handleSubmit} />
      <div className="todos">
        {todos.length > 0
          ? todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ))
          : "no Todos at all!!!"}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: min(40rem, 99%);
  margin: 1rem auto;
  background-color: rgba(0 0 0 / .5);
  color: #ccc;
  padding: 1rem .5rem;
  border-radius: 5px;
`

export default App;
