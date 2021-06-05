import React from 'react'

// const Sidebar = ({
//   notes,
//   onAddNote,
//   onDeleteNote,
//   activeNote,
//   setActiveNote,}) => {
//   return (
//     <div className="app-sidebar">
       
//       <div className="app-sidebar-header">
//         <h1>Notes</h1>
//         <button onClick={onAddNote}>Add</button>
//     </div> 
//       <div className="app-sidebar-notes">
        
//          {notes.map((note) => (
//            <div
//             className={`app-sidebar-note ${note.id === activeNote && "active"}`}

//              onClick={() => setActiveNote(note.id)}
//            >
//           <div className="sidebar-note-title">
//             <strong>{note.title}</strong>
//             <button onDelete={() => onDeleteNote(note.id)}>Delete</button>
//              </div>
             
//              <p>{note.body && note.body.substr(0, 100) + "..."}</p>
//              {/* for showing ... long sentences */}
//             <small className="note-meta">
//                Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
//                  hour: "2-digit",
//                  minute: "2-digit",
                 
//               })}
//             </small>     
//         </div>
           
//         ))} 
       
//        </div>
//     </div>
//   )
// }

// export default Sidebar
const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Silk's Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
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
