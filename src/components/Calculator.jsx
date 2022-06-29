import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: "f", temperature });
  };

  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f"
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
    const fahrenheit =
      scale === "c"
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <>
        <h4>
          Then, if other components also need it, you can lift it up to their
          closest common ancestor the top-down data flow of state, hoist the
          state to the nearest parent
        </h4>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}

export default Calculator;
