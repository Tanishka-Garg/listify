import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getNote = async () => {
    // todo call api
    // API call using fetch api
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzOTc3ZDk3ZGIxMDYxY2E4NmUxN2Q5In0sImlhdCI6MTY4MTQ4ODExNX0.KaUPdiSauzvkRyMD6kCZqOdMTNMBW9cNw7UWcKi3fi0",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add note
  const addnote = async (title, description, tag) => {
    // API call using fetch api
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzOTc3ZDk3ZGIxMDYxY2E4NmUxN2Q5In0sImlhdCI6MTY4MTQ4ODExNX0.KaUPdiSauzvkRyMD6kCZqOdMTNMBW9cNw7UWcKi3fi0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  //delete note
  const deletenote = async (id) => {
    // API call using fetch api
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzOTc3ZDk3ZGIxMDYxY2E4NmUxN2Q5In0sImlhdCI6MTY4MTQ4ODExNX0.KaUPdiSauzvkRyMD6kCZqOdMTNMBW9cNw7UWcKi3fi0",
      },
    });
    const json = await response.json();
    console.log(json);

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //edit note
  const editnote = async (id, title, description, tag) => {
    // API call using fetch api
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzOTc3ZDk3ZGIxMDYxY2E4NmUxN2Q5In0sImlhdCI6MTY4MTQ4ODExNX0.KaUPdiSauzvkRyMD6kCZqOdMTNMBW9cNw7UWcKi3fi0",
      },
      body: JSON.stringify({ title }),
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);

    //edit note in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addnote, deletenote, editnote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
