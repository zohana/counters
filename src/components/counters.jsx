import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructuring - to not to repeat this.props.blah many times,
    //we initialize it to --> this.props
    console.log("Counters - Rendered");

    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <br />
        <button className="btn-primary btn-sm" onClick={onReset}>
          Reset
        </button>
        <br />

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} //id={counter.id}value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
