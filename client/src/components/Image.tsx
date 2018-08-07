import * as React from "react";
import * as styles from "./Image.css";
import VisibleChild from "./VisibleChild";
interface props {
  imageUrl: string;
}

export default class Image extends React.Component<props, {}> {
  render() {
    return (
      <VisibleChild>
        <div className={styles.base}>
          <img
            className={styles.image}
            src={this.props.imageUrl}
            alt={this.props.imageUrl}
          />
        </div>
      </VisibleChild>
    );
  }
}