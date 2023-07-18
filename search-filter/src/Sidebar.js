import React from "react";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  setNotes,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note, id) => (
          <div
            key={id}
            onClick={() => setActiveNote(note.id)}
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>DELETE</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
