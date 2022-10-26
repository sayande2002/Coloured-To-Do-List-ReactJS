import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";
export default function NoteContainer(props) {
  const revArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = revArray(props.notes);
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => (
            <Note key={item.id} note={item} deleteNote={props.deleteNote} />
          ))
        ) : (
          <h3> No Notes Present</h3>
        )}
      </div>
    </div>
  );
}
