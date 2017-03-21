import {h} from 'hyperapp'
import {todoInput} from './view.todo-input'
import {todoList} from './view.todo-list'
import {todoListDone} from './view.todo-list-done'
import {modelDisplay} from './view.model-display'

const todoMain = (model, actions) => 
  <div class="container">
      {todoList(model, actions)}
      {todoInput(model, actions)}
      {todoListDone(model, actions)}
      {modelDisplay(model)}
  </div>

export {todoMain}