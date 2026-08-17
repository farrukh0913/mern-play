import { useState } from "react";
import useStore from "../store/useStore";
import "./Login.css";

function Login() {
  const updateUser = useStore((state) => state.updateUser);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.user?.authenticated) {
          console.log("User: Response", data.user);
          useStore.getState().setUser({ ...data.user });
          console.log("User: Stored", useStore.getState().user);
          useStore.getState().updateUser({ email: "farrukhdev01@gmail.com" });
          console.log("User: Updated", useStore.getState().user);
          useStore.getState().clearUser();
          console.log("User: Cleared", useStore.getState().user);
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back (Zustand Store) 👋</h1>
          <p>Login to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <div className="signup">
          Don't have an account?
          <a href="#">Create account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
