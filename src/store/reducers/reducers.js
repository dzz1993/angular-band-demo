import * as actions from '../actions/actions'
import { title } from '../state/state'

export function reducer(state = title, action) {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return action.payload;
    }
    default:
      return "未知页面"
  }
}
