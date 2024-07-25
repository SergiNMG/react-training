import PropTypes from "prop-types";
import { useValue } from "./hooks/useValue";

export const CounterApp = () => {
  const { value, addValue, substractValue, resetValue } = useValue();

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={addValue}> +1 </button>
      <button onClick={substractValue}> -1 </button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
