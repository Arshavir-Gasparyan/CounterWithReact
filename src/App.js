import { Component } from "react";
import Counter from "./components/counter/counter";
import InputCondition from "./components/inputsForStep/inpust";
class App extends Component {
  state = {
    value: 0,
    step: 1,
    minStep: 10,
    maxStep: 100,
  };

  nextCount = () => {
    if (this.state.value < this.state.maxStep)
      this.setState({
        value: this.state.value + this.state.step,
      });
  };
  prevCount = () => {
    if (this.state.value > this.state.minStep) {
      this.setState({
        value: this.state.value - this.state.step,
      });
    }
  };
  reset = () => {
    this.setState({
      value: (this.value = 0),
    });
  };
  changeStep = (event) => {
    this.setState({
      step: Number(event.target.value),
    });
  };
  changeMinStep = (event) => {
    this.setState({
      minStep: Number(event.target.value),
    });
  };
  changeMaxStep = (event) => {
    this.setState({
      maxStep: Number(event.target.value),
    });
  };
  render() {
    return (
      <>
        <Counter
          current={this.state.value}
          nextCount={this.nextCount}
          prevCount={this.prevCount}
          reset={this.reset}
        />
        <InputCondition
          changeStep={this.changeStep}
          changeMinStep={this.changeMinStep}
          changeMaxStep={this.changeMaxStep}
        />
      </>
    );
  }
}

export default App;
