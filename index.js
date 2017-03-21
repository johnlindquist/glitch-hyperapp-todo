import {app} from 'hyperapp'
import {actions} from './actions'
import {model} from './model'
import {root} from './root'
import {view} from './view'
import {setTodos} from './util.local-storage'

app({
  actions,
  model,
  root,
  view,
  hooks:{
    onUpdate: (oldModel, newModel, data)=>{
      setTodos(newModel.todos)
    }
  }
})