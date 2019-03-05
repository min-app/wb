import { combineReducers } from 'redux'

import question from './question'
import professor from './professor'
import userQuestion from './userQuestion'

export default combineReducers({
  question,
  professor,
  userQuestion
})
