import React from "react";
import { Link } from "react-router-dom";

function Playground() {
  return (
    <div>
      <div>
        <Link to="/reducer">
          <button>Go to useReducer</button>
        </Link>

        <Link to="/memo">
          <button>Go to useMemo</button>
        </Link>

        <Link to="/callback">
          <button>Go to useCallback</button>
        </Link>

        <Link to="/users">
          <button>Go to Users</button>
        </Link>
      </div>

      <h3>React Hooks Playground</h3>
    </div>
  );
}

export default Playground;