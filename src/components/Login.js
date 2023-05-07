import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
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
      props.showAlert("successfully login ", "success");
    } else {
      props.showAlert("invalid credentials", "danger");
    }
  };
  return (
    <>
      <section className="vh-100 bg-image">
        <div
          className="mask d-flex align-items-center h-100 gradient-custom-3"
          style={{
            background:
              "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
          }}
        >
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">LOGIN</h2>
                    <form onSubmit={handleSubmit}>
                      <div lassName="form-outline mb-4">
                        <input
                          onChange={onChange}
                          placeholder="email@example.com"
                          type="email"
                          className="form-control form-control-lg"
                          id="Email"
                          name="email"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text my-2">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          onChange={onChange}
                          placeholder="password"
                          type="password"
                          className="form-control form-control-lg"
                          id="password"
                          name="password"
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
