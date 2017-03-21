import {h} from 'hyperapp'

const removeButton = (actions, id) => 
  <button class="button button-clear" onclick={e => actions.remove(id)}>x
  </button>

export {removeButton}