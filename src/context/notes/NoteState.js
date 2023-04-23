import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "643d86b07510d03154dda77a",
      user: "643977d97db1061ca86e17d9",
      title: "check up",
      description: "checking to add new note",
      tag: "test",
      date: "2023-04-17T17:49:36.945Z",
      __v: 0,
    },
    {
      _id: "643e513151a28f496372d575",
      user: "643977d97db1061ca86e17d9",
      title: "check up 3",
      description: "checking to add new note ",
      tag: "test",
      date: "2023-04-18T08:13:37.299Z",
      __v: 0,
    },
    {
      _id: "643e51c963af79e34993982a",
      user: "643977d97db1061ca86e17d9",
      title: "check up 3",
      description: "checking to add new note ",
      tag: "test",
      date: "2023-04-18T08:16:09.765Z",
      __v: 0,
    },
    {
      _id: "643e51cb63af79e34993982c",
      user: "643977d97db1061ca86e17d9",
      title: "check up 3",
      description: "checking to add new note ",
      tag: "test",
      date: "2023-04-18T08:16:11.597Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
