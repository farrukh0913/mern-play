import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Playground() {
  const navigate = useNavigate();
  const goToPage = (page) => navigate(`/${page}`);
  const [count, setCount] = useState(0);

  var countRef = useRef(0);
  useEffect(() => {
    console.log("Count changed:", count);
    countRef.current++;
  }, [count]);

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

        <button onClick={() => goToPage("users")}>Go to Users</button>
      </div>

      <h3>React Hooks Playground </h3>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Playground;
