import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deletenote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card text-bg-success mb-3">
        <div className="card-body">
          <span class="position-absolute top-3 start-100 translate-middle badge rounded-pill text-bg-light border border-success">
            {note.tag}
          </span>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>

          <i
            className="fa-solid fa-trash-can mx-3"
            onClick={() => {
              deletenote(note._id);
              props.showAlert(" deleted successfully", "danger");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-3"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
