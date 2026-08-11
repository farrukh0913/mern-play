import { useCallback, useState } from "react";
// callback is used to memoize a function so that it doesn't get recreated on every render. It is useful when passing functions as props to child components to prevent unnecessary re-renders.
function CallbackComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback((value) => {
    console.log("Button clicked", value);
    return count * value;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => handleClick(3)}>
        Click me
      </button>
      <div>{handleClick(count)}</div>
    </div>
  );
}

export default CallbackComponent;