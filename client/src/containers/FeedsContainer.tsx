import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {bindActionCreators, Dispatch} from "redux"
import StoreState from "../../../shared/feed.interface";
import { getFeed } from "../actions/feed.action";
import FeedsComponent from "../components/FeedsComponent";

function mapStateToProps(state: StoreState) {
  return {
    feeds: state.feeds.feeds
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getFeeds: bindActionCreators(getFeed, dispatch)
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FeedsComponent)
) as React.ComponentClass<{}>;