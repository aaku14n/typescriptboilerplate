import { combineReducers } from "redux"
import {RootState } from "../../../shared/feed.interface"
import feedsReducer from "./feed.reducer"
import feedReducer from "./feedComponent.reducer"
const rootReducer = combineReducers<RootState>({
    feeds:feedsReducer,
    feed:feedReducer
})
export default rootReducer;