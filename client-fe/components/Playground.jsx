import ReducerComponent from "./Reducer";
import MemoComponent from "./Memo";
import CallbackComponent from "./Callback";

function Playground() {
  return (
    <div>
      <h1>React Hooks Playground</h1>

      <hr />

      <h2>useReducer</h2>
      <div>
        <ReducerComponent />
      </div>

      <br />
      <hr />

      <h2>useMemo</h2>
      <div>
        <MemoComponent />
      </div>

      <br />
      <hr />

      <h2>useCallback</h2>
      <div>
        <CallbackComponent />
      </div>
    </div>
  );
}

export default Playground;