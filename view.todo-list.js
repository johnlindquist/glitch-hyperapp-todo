import {h} from 'hyperapp'
import {todoItem} from './view.todo-item'

const todoList = (model, actions) => 
  <p>
    <dl>
      {
        model.todos
        .filter(t => !t.done)
        .map(t => todoItem(t, actions))
      }
    </dl>
  </p>

export {todoList}