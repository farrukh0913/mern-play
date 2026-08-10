import { useCallback, useState } from "react";
// callback is used to memoize a function so that it doesn't get recreated on every render. It is useful when passing functions as props to child components to prevent unnecessary re-renders.
function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={handleClick}>
        Click me
      </button>
      <div>{handleClick()}</div>
    </div>
  );
}

export default Callback;