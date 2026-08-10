import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import ReducerComponent from "./reducer.jsx";
import Memo from "./Memo.jsx";

// useReducer
function reducer(state, action) {
  console.log("Reducer called with action:", action);
  console.log("Current state:", state);
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
}

function Users() {
  // ==================================================
  // 1. useState
  // ==================================================

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);

  // ==================================================
  // 2. useEffect
  // ==================================================

  // Runs when component mounts
  useEffect(() => {
    console.log("Component mounted");

    setLoading(true);

    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // Cleanup
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // useEffect when search changes
  useEffect(() => {
    console.log("Search changed:", search);
  }, [search]);

  // ==================================================
  // 3. useLayoutEffect
  // ==================================================

  useLayoutEffect(() => {
    console.log("useLayoutEffect - runs before browser paint");
  }, []);

  // ==================================================
  // 4. useRef
  // ==================================================

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // ==================================================
  // 5. useMemo
  // ==================================================

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");

    return users.filter((user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  // ==================================================
  // 6. useCallback
  // ==================================================

  const handleUserClick = useCallback((user) => {
    console.log("Selected user:", user);
  }, []);

  // ==================================================
  // 7. useReducer
  // ==================================================

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  // ==================================================
  // Render
  // ==================================================

  return (
    <div>
      <h1>Users</h1>

      {/* useState */}

      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
      />

      {/* useRef */}

      <button onClick={focusInput}>Focus Input</button>

      {/* useReducer */}

      <div>
        <h2>Counter: {state.count}</h2>

        <button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          +
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          -
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
        >
          Reset
        </button>
      </div>

      {/* Loading */}

      {loading && <p>Loading...</p>}

      {/* useMemo */}

      <ul>
        {filteredUsers.map((user) => (
          <li key={user._id} onClick={() => handleUserClick(user)}>
            {user.name} --- {user.email}
          </li>
        ))}
      </ul>

      <br />
      <div>
        <ReducerComponent />
      </div>
      <br />
      <hr />
      <h1>useMemo</h1>
      <div>
        <Memo />
      </div>
      <h1>Helooo</h1>
    </div>
  );
}

export default Users;
