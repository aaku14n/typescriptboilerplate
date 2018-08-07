import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import StoreState from "../../../shared/feed.interface";
export default function configureStore() {
  return createStore<StoreState,any,any,any>(rootReducer, applyMiddleware(thunkMiddleware));
}