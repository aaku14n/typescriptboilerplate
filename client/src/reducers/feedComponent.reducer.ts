import { ActionTypeKeys } from "../actions/actionTypeKeys"
import ActionTypes from "../actions/actionTypes"
import initialState from "./FeedComponent.initialState"
export default function feedReducer(state = initialState,action:ActionTypes){
    switch(action.type){
        case ActionTypeKeys.GET_FEED_COMPONENT_REQUEST:
        return Object.assign({},state,{
            loading:true
        })
        case ActionTypeKeys.GET_FEED_COMPONENT_SUCCESS:
        return Object.assign({},state,{
            feed:action.payload,
            loading:false
        })
        case ActionTypeKeys.GET_FEED_COMPONENT_FAILURE:
        return Object.assign({},state,{
            error: action.payload.error
        });
        default:
        return state;
    }
}