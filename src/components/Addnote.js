// import {useState} from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Addnote() {
    const context=useContext(noteContext)
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:""})


    const handleClick=(e)=>{
        // console.log("add a new note")
        e.preventDefault();
        
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})

    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value}) 

    }





  return (
    <div>
        <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length<3||note.description.length<5} >
          Submit
        </button>
      </form>
      
    </div>
  )
}
