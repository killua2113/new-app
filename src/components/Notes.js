import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notesitem from "./Notesitem";
import {useNavigate} from 'react-router-dom'



export default function Notes() {
  let navigate=useNavigate();
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes();
    }
    
    else
    {
      navigate("/login")
    }
  }, [navigate, getNotes]);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id ,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };
  const handleClick=(e)=>{
    // console.log("add a new note")
    e.preventDefault();
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    
    // addNote(note.title,note.description,note.tag)
    // setNote({title:"",description:"",tag:""})

}
const onChange=(e)=>{
    setNote({...note,[e.target.name]: e.target.value}) 

}

  
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="mb-3  mx-3  my-2">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  aria-describedby="emailHelp"
                  name="etitle"
                  value={note.etitle}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3  mx-3  my-2">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}

                  onChange={onChange}
                />
              </div>
              <div className="mb-3  mx-3  my-2">
                <label htmlFor="tag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  value={note.etag}

                  onChange={onChange}
                />
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick} >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="notesitem">
        <h2>Your Notes</h2>
        <div className="container" >
          {notes.length===0&&"No Notes to display please add a note."}
          </div>
        {notes.map((note) => {
          return (
            <Notesitem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}
