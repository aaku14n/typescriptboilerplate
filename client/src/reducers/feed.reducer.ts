import { ActionTypeKeys } from "../actions/actionTypeKeys";
import ActionTypes from "../actions/actionTypes";
import initialState from "./feed.initialState";
export default function feedsReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case ActionTypeKeys.GET_FEED_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case ActionTypeKeys.GET_FEED_SUCCESS:
      return Object.assign({}, state, {
        feeds: action.payload,
        loading: false
      });
    case ActionTypeKeys.GET_FEED_FAILURE:
      return Object.assign({}, state, {
        error: action.payload.error,
        loading: false
      });
    default:
      return state;
  }
}