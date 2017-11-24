import "babel-polyfill";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getViewBoxString,
  getViewport,
  initialize,
  center,
  panBy,
  zoomFromWheelEvent,
  set,
} from "redux-svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panning: false,
      previousPoint: null,
      lastMouseWheelEventTime: Date.now(),
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
  }

  componentDidMount() {
    this.props.initialize(800, 600);
    this.props.set("maxZoomIn", 100);
    this.props.set("maxZoomOut", 0.01);
    this.props.center();
  }

  handleMouseDown(e) {
    this.setState({
      panning: true,
      previousPoint: {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
    });
  }

  handleMouseUp() {
    if (this.state.panning) {
      this.setState({
        panning: false,
        previousPoint: null,
      });
    }
  }

  handleMouseMove(e) {
    if (this.state.panning) {
      this.props.panBy(e.nativeEvent.offsetX, e.nativeEvent.offsetY, this.state.previousPoint);

      this.setState({
        previousPoint: { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
      });
    }
  }

  handleMouseLeave() {
    if (this.state.panning) {
      this.setState({
        panning: false,
      });
    }
  }

  handleMouseWheel(e) {
    if (this.state.panning) {
      return;
    }

    this.props.zoomFromWheelEvent(
      {
        deltaY: e.nativeEvent.deltaY,
        deltaMode: e.nativeEvent.deltaMode,
        wheelDelta: e.nativeEvent.wheelDelta,
      },
      Date.now() - this.state.lastMouseWheelEventTime
    );

    this.setState({
      lastMouseWheelEventTime: Date.now(),
    });
  }

  render() {
    return (
      <div>
        <svg
          width={this.props.width}
          height={this.props.height}
          viewBox={this.props.viewBox}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
          onWheel={this.handleMouseWheel}
          style={{ backgroundColor: "lightblue" }}
        >
          <circle cx={this.x} cy={this.y} r={10} fill="midnightblue" />
        </svg>
      </div>
    );
  }
}

export default connect(
  state => ({
    viewBox: getViewBoxString(state),
    ...getViewport(state),
  }),
  {
    initialize,
    set,
    center,
    panBy,
    zoomFromWheelEvent,
  }
)(App);
