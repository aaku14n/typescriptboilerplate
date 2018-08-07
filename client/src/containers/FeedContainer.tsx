import {connect } from "react-redux"
import {withRouter} from "react-router-dom"
import {bindActionCreators, Dispatch} from "redux"
import StoreState from "../../../shared/feed.interface"
import FeedComponent from "../components/FeedComponent" 
import { getFeedComponent } from "../actions/feed.action.ts";

function mapStateToProps(state:StoreState){
    return {
        feed:state.feed.feed,
        loading:state.feed.loading
    }
}
function mapDispatchToProps(dispatch:Dispatch){
    return {
        getFeed:bindActionCreators((id)=>getFeedComponent(id),dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FeedComponent))
