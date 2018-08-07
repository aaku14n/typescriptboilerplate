import { Dispatch } from "redux";
import * as keys from "./actionTypeKeys";
import {
  getFeedRequestAction,
  getFeedSuccessAction,
  getFeedFailureAction,
  getFeedComponentRequestAction,
  getFeedComponentSuccessAction,
  getFeedComponentFailureAction
} from "./action.interface";
import { Feed, FeedComponent } from "../../../shared/feed.interface";
export const API_URL_PATH: string = "http://localhost:3000/";
function getFeedRequest(): getFeedRequestAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_REQUEST
  };
}
function getFeedSuccess(feeds: Feed[]): getFeedSuccessAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_SUCCESS,
    payload: feeds
  };
}
function getFeedFailure(error: Error): getFeedFailureAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_FAILURE,
    payload: {
      error: error
    }
  };
}

export function getFeed(): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    dispatch(getFeedRequest());
    try {
      //await call here
      const feeds: any = await fetch(`${API_URL_PATH}feeds`, { method: "get" });
      const result: any = await feeds.json();
      dispatch(getFeedSuccess(result));
    } catch (e) {
      dispatch(getFeedFailure(e.message));
    }
  };
}

function getFeedComponentRequest(): getFeedComponentRequestAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_COMPONENT_REQUEST
  };
}
function getFeedComponentSuccess(
  feedComponent: FeedComponent
): getFeedComponentSuccessAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_COMPONENT_SUCCESS,
    payload: feedComponent
  };
}
function getFeedComponentFailure(error: Error): getFeedComponentFailureAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_COMPONENT_FAILURE,
    payload: {
      error: error
    }
  };
}
export function getFeedComponent(
  id: number
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    dispatch(getFeedComponentRequest());
    try {
      const feed: any = await fetch(`${API_URL_PATH}feed/${id}`);
      const feedJson: FeedComponent = await feed.json();
      dispatch(getFeedComponentSuccess(feedJson));
    } catch (e) {
      dispatch(getFeedComponentFailure(e.message));
    }
  };
}