import { Component } from "react";
import styles from "./Counter.module.css";
class Counter extends Component {
  render() {
    const { prevCount, nextCount, reset } = this.props;
    return (
      <div className={styles.main}>
        <span className={styles.count}>{this.props.current}</span>
        <button className={styles.btn} onClick={prevCount}>
          prev
        </button>
        <button className={styles.btn} onClick={nextCount}>
          next
        </button>
        <button className={styles.btn} onClick={reset}>
          reset
        </button>
      </div>
    );
  }
}
export default Counter;
