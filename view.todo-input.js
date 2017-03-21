import {h} from 'hyperapp'

const todoInput = (model, actions) =>
  <div class="row">
    <input
      type="text"
      onkeyup={e => e.keyCode === 13 && e.target.value !== '' ? actions.add() : ''}
      oninput={e => actions.input({value: e.target.value})}
      value={model.input}
      placeholder={model.placeholder}/>
  </div>

export {todoInput}