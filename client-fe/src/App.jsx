import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import Playground from "./components/Playground";
import Login from "./components/Login";
import ReducerComponent from "./components/Reducer";
import MemoComponent from "./components/Memo";
import CallbackComponent from "./components/Callback";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="nav-button">
          Login
        </Link>

        <Link to="/users" className="nav-button">
          Users
        </Link>

        <Link to="/reducer" className="nav-button">
          useReducer
        </Link>

        <Link to="/memo" className="nav-button">
          useMemo
        </Link>

        <Link to="/callback" className="nav-button">
          useCallback
        </Link>

        <Link to="/playground" className="nav-button">
          Playground
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

        {/* Catch-all route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;