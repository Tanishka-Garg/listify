import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const Addnote = (props) => {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("note added successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card-body text-success">
                <h2 className="text-uppercase text-center mb-5">ADD ITEM</h2>
                <form>
                  <div className="mb-3">
                    <input
                      placeholder="Title"
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      id="title"
                      name="title"
                      aria-describedby="inputGroup-sizing-sm"
                      value={note.title}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Description"
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={note.description}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Tag"
                      className="form-control"
                      id="tag"
                      name="tag"
                      value={note.tag}
                      onChange={onChange}
                    />
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button
                      disabled={
                        note.title.length < 3 || note.description.length < 2
                      }
                      type="submit"
                      onClick={handleClick}
                      className="btn btn-success"
                    >
                      Add Note
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
