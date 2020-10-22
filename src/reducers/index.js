import { combineReducers } from 'redux'
import notes from './notes'
import user from './user'
import note from './note'

export default combineReducers({
  notes,
  user,
  note
})