import * as React from "react";
import { Dispatch } from "redux";
import * as styles from "./FeedsComponent.css";
import Image from "./Image";
interface IFeedProps  {
  readonly feeds: any;
   getFeeds: () => (dispatch: Dispatch) => Promise<void>;
   history:any
}

export default class FeedsComponent extends React.Component<IFeedProps> {
  componentDidMount() {
    this.props.getFeeds();
  }
  private navigate = (id:number) =>{
  this.props.history.push(`feed/${id}`)
  }
  public render() {
    if (this.props.feeds.loading) {
      return <div>Loading</div>;
    }
    return (
      <div className={styles.base}>
        {this.props.feeds &&
          this.props.feeds.map((feed: any, idx: number) => {
            return (
              <div className={styles.feeds} key={idx} onClick={()=>this.navigate(feed.id)}>
                <h3>{feed.title}</h3>

                <Image imageUrl={feed.imageUrl} />
              </div>
            );
          })}
      </div>
    );
  }
}