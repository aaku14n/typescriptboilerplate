import * as React from "react";
import Observer from "react-intersection-observer";
interface IState {
  visibleChild: boolean;
}
interface IProps {
  children: any;
}
export default class VisibleChild extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      visibleChild: false
    };
  }
  private inView(interSectionObj: any) {
    if (interSectionObj && !this.state.visibleChild) {
      this.setState({ visibleChild: true });
    }
  }
  public render() {
    const options = {
      onChange: (obj: any) => this.inView(obj)
    };
    return !this.state.visibleChild ? (
      <Observer {...options}>
        <div />
      </Observer>
    ) : (
      this.props.children
    );
  }
}