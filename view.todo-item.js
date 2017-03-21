import {h} from 'hyperapp'
import {removeButton} from './view.remove-button'

const todoItem = (t, actions) => 
  <dt>
    <div class="inline">
      {removeButton(actions, t.id)}
    </div>   
    <div class={t.done ? "inline done" : "inline"} onclick={e => actions.toggle({id: t.id, value: t.done})}>
      {t.value}
    </div>
  </dt>

export {todoItem}