import { FeedComponentStore } from "../../../shared/feed.interface"
const defaultFeedComponentState : FeedComponentStore = {
    loading:false,
    feed:{
        id:0,
        title:"",
        description:"",
        imageUrl:""
    }
}
export default defaultFeedComponentState