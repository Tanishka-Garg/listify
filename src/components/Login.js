import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState();
  const navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem("token", json.auth_token);
      navigate("/");
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <>
      <div className="container my-3">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label htmlFor="Email" className="form-label">
              Email address
            </label> */}
            <input
              onChange={onChange}
              placeholder="email@example.com"
              type="email"
              className="form-control"
              id="Email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            {/* <label htmlFor="password" className="form-label">
              Password
            </label> */}
            <input
              onChange={onChange}
              placeholder="password"
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
