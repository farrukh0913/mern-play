import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Users from "../components/users";
import Playground from "../components/playground";
import Login from "../components/login";
import ReducerComponent from "../components/reducer";
import MemoComponent from "../components/Memo";
import CallbackComponent from "../components/Callback";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <button>Login</button>
        </Link>

        <Link to="/users">
          <button>Users</button>
        </Link>

        <Link to="/reducer">
          <button>useReducer</button>
        </Link>

        <Link to="/memo">
          <button>useMemo</button>
        </Link>

        <Link to="/callback">
          <button>useCallback</button>
        </Link>

        <Link to="/playground">
          <button>Playground</button>
        </Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reducer" element={<ReducerComponent />} />
        <Route path="/memo" element={<MemoComponent />} />
        <Route path="/callback" element={<CallbackComponent />} />
        <Route path="/playground" element={<Playground />} />
        {/* Wildcard */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;