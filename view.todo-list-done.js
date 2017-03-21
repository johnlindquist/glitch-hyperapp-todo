import {h} from 'hyperapp'
import {todoItem} from './view.todo-item'

const todoListDone = (model, actions) => 
  <p>
    <dl>
      {
        model.todos
        .filter(t => t.done)
        .map(t => todoItem(t, actions))
      }
    </dl>
  </p>

export {todoListDone}