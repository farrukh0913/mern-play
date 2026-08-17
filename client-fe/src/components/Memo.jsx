import { useMemo, useState } from "react";

function MemoComponent() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");

    return count * 100;
  }, [count]);

  return (
    <div>
      <h1>useMemo</h1>
      <br></br>
      <h2>Result: {expensiveCalculation}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <div>{count}</div>
    </div>
  );
}

export default MemoComponent;