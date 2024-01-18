import { useState } from "react";
import "./Counter.css";
import { PropTypes } from "prop-types";

export default function Counter() {
  const [count, countUpdate] = useState(0);

  function icrementCounterParentFunction(by) {
    countUpdate(count + by);
  }
  return (
    <>
      <span className="totalCount">{count}</span>
      <Counter by={1} IncrementMethod={icrementCounterParentFunction} />
      <Counter by={2} IncrementMethod={icrementCounterParentFunction}></Counter>
      <Counter by={5} IncrementMethod={icrementCounterParentFunction}></Counter>
    </>
  );
}

function CounterButton({ by, IncrementMethod }) {
  const [count, countUpdate] = useState(0);

  function IncrementButton() {
    countUpdate(count + by);
    IncrementMethod(by);
  }
  function DecrementButton() {
    countUpdate(count - by);
    IncrementMethod(by);
  }

  return (
    <div>
      <span className="count">{count}</span>
      <div>
        <button className="CounterButton" onClick={IncrementButton}>
          +{by}
        </button>
        <button className="CounterButton" onClick={DecrementButton}>
          -{by}
        </button>
      </div>
    </div>
  );
}
CounterButton.propTypes = {
  by: PropTypes.number,
};
