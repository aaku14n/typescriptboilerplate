import * as React from "react";
import { Dispatch } from "redux";
import Image from "./Image";
import { FeedComponent } from "../../../shared/feed.interface"
import * as styles from "./FeedsComponent.css";
interface IProps {
  getFeed: (id: number) => (dispatch: Dispatch) => Promise<void>;
  feed:FeedComponent;
  feedComponent: any;
  history: any;
  match: any;
  loading:boolean
}
export default class FeedAppComponent extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.getFeed(parseInt(this.props.match.params.feedId, 10));
  }
  public render() {
    if(this.props.loading){
      return <div >Loading</div>
    }
    return (
      <div className={styles.base}>
        <div className={styles.title}>
          <h1 className={styles.titleLine}>{this.props.feed.title}</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.left}>{this.props.feed.description}</div>
          <div className={styles.right}>
            <Image imageUrl={this.props.feed.imageUrl} />
          </div>
        </div>
      </div>
    );
  }
}