export const toggleTodo = (model, {id, value}) => model.todos.map(t => id === t.id ? Object.assign({}, t, {
    done: !value
  }) : t)