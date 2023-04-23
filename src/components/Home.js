import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>ADD ITEM</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>

      <Notes />
    </div>
  );
};

export default Home;
