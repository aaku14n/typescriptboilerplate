import {
    getFeedRequestAction,
    getFeedSuccessAction,
    getFeedFailureAction,
    getFeedComponentFailureAction,
    getFeedComponentRequestAction,
    getFeedComponentSuccessAction
} from "./action.interface"
type ActionTypes = 
| getFeedRequestAction
| getFeedSuccessAction
| getFeedFailureAction
| getFeedComponentFailureAction
| getFeedComponentRequestAction
| getFeedComponentSuccessAction;
export default ActionTypes