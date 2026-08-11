import { Link, useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function Playground() {
  const navigate = useNavigate();
  const goToPage = (page) => navigate(`/${page}`);
  

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

        <button onClick={() => goToPage("users")}>
          Go to Users
        </button>
      </div>

      <h3>React Hooks Playground 123</h3>
    </div>
  );
}

export default Playground;