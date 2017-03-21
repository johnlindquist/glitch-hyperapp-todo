import {h} from 'hyperapp'

const modelDisplay = (model) => 
  <pre>
    <code>
      {JSON.stringify(model, null, 2)}
    </code>
  </pre>

export {modelDisplay}