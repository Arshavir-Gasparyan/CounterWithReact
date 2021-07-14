import { Component } from "react";
import styles from "./inputs.module.css";

class InputCondition extends Component {
  render() {
    return (
      <div className={styles.form}>
        <input
          className={styles.input}
          onChange={this.props.changeStep}
          placeholder="step"
          type="text"
        ></input>
        <input
          className={styles.input}
          onChange={this.props.changeMaxStep}
          placeholder="max"
          type="text"
        ></input>
        <input
          className={styles.input}
          onChange={this.props.changeMinStep}
          placeholder="min"
          type="text"
        ></input>
      </div>
    );
  }
}
export default InputCondition;
