import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
    fruits: []
    //fruits: ["Mango", "Banana", "Cherry"]
  };

  styles = { fontSize: 10, fontWeight: "bold" };

  getCounterNumber() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  renderFuits() {
    if (this.state.fruits.length === 0)
      return <p>Fruit basket cannot be empty!</p>;
    return (
      <ul>
        {this.state.fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    );
  }

  handleClick = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <br />
        {/* when divs are not really required */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.getCounterNumber()}
        </span>
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <br />
       
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

       {/*  {this.state.fruits.length === 0 && "Empty fruit basket, poor baby"}
        {this.renderFuits()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
