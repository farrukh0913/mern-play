import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Login from "../components/Login";
import Users from "../components/users";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/users");

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

    return () => {
      console.log("Cleanup function called");
    };
  }, []);

  return (
    <>
      <div className="ticks"></div>
      <Login />
      <div className="ticks"></div>
      <Users />
      <section id="spacer"></section>
    </>
  );
}

export default App;
