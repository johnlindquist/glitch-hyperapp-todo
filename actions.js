import {setTodos} from './util.local-storage'
import {addTodo} from './action.add-todo'
import {removeTodo} from './action.remove-todo'
import {toggleTodo} from './action.toggle-todo'

const actions = {
  add: model => ({
    input: '',
    todos: addTodo(model)
  }),
  input: (model, {value}) => ({
    input: value
  }),
  remove: (model, id) => ({
    todos: removeTodo(model, id) 
  }),
  toggle: (model, {id, value}) => ({
    todos: toggleTodo(model, {id, value})
  })
}

export {actions}