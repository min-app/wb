import { 
  FETCH,
  FETCH_REPLY
} from '../constants/question'

const INITIAL_STATE = {
  lists: [],
  replyLists: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        lists: action.page > 1 ? [...state.lists, ...action.lists] : action.lists
      }
    case FETCH_REPLY:
      return {
        ...state,
        replyLists: action.page > 1 ? [...state.replyLists, ...action.replyLists] : action.replyLists
      }
    default:
      return state
  }
}
