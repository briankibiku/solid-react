import React, { Component } from "react";

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      bin: 0,
      isToggleOn: true,
      name: "",
      warn: true,
      input: "",
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date(), bin: this.state.bin !== 0 ? 0 : 1 });
  }
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  showName(name) {
    this.setState({ name: name });
  }
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  handleSubmit = (e) => {
    alert("you input " + this.state.input);
    e.preventDefault();
  };
  render() {
    const dateToday = this.state.date.toLocaleTimeString();
    return (
      <>
        <h2>{dateToday}</h2>
        <div>{this.state.bin}</div>
        <form onSubmit={this.handleSubmit}>
          {/* value and onChange can be used for textarea and select HTML options */}
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          When you define a component using an ES6 class, a common pattern is
          for an event handler to be a method on the class
        </p>
        <p>
          We generally recommend binding in the constructor or using the class
          fields syntax, to avoid this sort of performance problem.
        </p>
        <WarningBanner warn={this.state.warn} />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {/* evaluates true condition only */}
        {this.state.isToggleOn === true && (
          <button onClick={() => this.showName("Ben 10")}>
            Press Me
            {this.state.name}
          </button>
        )}
      </>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  const nums = [1, 2];
  const ind = nums.map((num) => <li key={num.toString()}>{num}</li>);
  return (
    <>
      <div className="warning" style={{ color: "red", fontSize: "24px" }}>
        Warning!
        <div>
          <ul style={{ listStyle: "none" }}>{ind}</ul>
        </div>
      </div>
    </>
  );
}
