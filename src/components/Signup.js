import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const host = "http://localhost:5000";
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
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
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="name"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          placeholder="email@examle.com"
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          placeholder="password"
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          onChange={onChange}
                          minLength={7}
                          required
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          placeholder="confirm password"
                          id="confirmpassword"
                          className="form-control form-control-lg"
                          onChange={onChange}
                          minLength={7}
                          required
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
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

export default Signup;
