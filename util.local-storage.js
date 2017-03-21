const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos'))
}

const setTodos = (todos) => {
  return localStorage.setItem('todos', JSON.stringify(todos))
}

export {getTodos, setTodos}