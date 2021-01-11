import React, { Component } from "react";
class Counter extends Component {
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div className="row">
        <div className="col-1">
          <span className={classes}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }

  // this is inherited from the arrow function
  // otherwise in the ctor we could use:
  // this.handleIncrement = this.handleIncrement.bind(this);
  handleIncrement = () => {
    this.setState({ value: this.props.counter.value + 1 });
  };
}
export default Counter;
