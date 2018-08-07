import * as keys from "./actionTypeKeys";
import { FeedComponent, Feed } from "../../../shared/feed.interface";
export interface getFeedRequestAction {
  readonly type: keys.ActionTypeKeys.GET_FEED_REQUEST;
}
export interface getFeedSuccessAction {
  readonly type: keys.ActionTypeKeys.GET_FEED_SUCCESS;
  readonly payload: Feed[];
}
export interface getFeedFailureAction {
  readonly type: keys.ActionTypeKeys.GET_FEED_FAILURE;
  readonly payload: {
    readonly error: Error;
  };
}
export interface getFeedComponentSuccessAction {
  readonly type: keys.ActionTypeKeys.GET_FEED_COMPONENT_SUCCESS;
  readonly payload: FeedComponent;
}
export interface getFeedComponentRequestAction {
  readonly type: keys.ActionTypeKeys.GET_FEED_COMPONENT_REQUEST;
}
export interface getFeedComponentFailureAction {
  readonly type: keys.ActionTypeKeys.GET_FEED_COMPONENT_FAILURE;
  readonly payload: {
    readonly error: Error;
  };
}