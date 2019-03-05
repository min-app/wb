import { 
  FETCH,
  DETAIL
} from '../constants/professor'

const INITIAL_STATE = {
  lists: [],
  detail: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        lists: action.page > 1 ? [...state.lists, ...action.lists] : action.lists
      }
    case DETAIL:
      return {
        ...state,
        detail: action.detail
      }
    default:
      return state
  }
}
