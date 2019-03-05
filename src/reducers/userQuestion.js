import { FETCH } from '../constants/userQuestion'

const INITIAL_STATE = {
  lists: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        lists: action.page > 1 ? [...state.lists, ...action.lists] : action.lists
      }
    default:
      return state
  }
}
