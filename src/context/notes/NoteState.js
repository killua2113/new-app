// import React from "react";
import { useState } from "react";
// import Notes from "../../components/Notes";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial =[]
  const [notes, setNotes] = useState(notesInitial)
  // const [authtoken1,setAuthtoken1]=useState("")
  // const [authtoken2,setAuthtoken2]=useState("")




  // fetch all notes
  const getNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'auth-token':localStorage.getItem('token') 
      }
      // body: JSON.stringify({title,description,tag})
      
    })
    const json= await response.json()
    console.log(json)
    setNotes(json)
  } 



  // function to add a note
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})
      
    })
    // const json=await response.json();
    // console.log(json)
   const note=await response.json()
    setNotes(notes.concat(note))
    console.log(note)

  }








  // funtion to delete a note 
  const deleteNote =async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      // body: JSON.stringify({title,description,tag})
    })
    const json=await response.json();
    console.log(json)




    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)


  }








  // function to edit a note

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
        headers: {
          'content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag})
      })
      const json=response.json()
      console.log(json)
      
      
      
      let newNotes=JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < notes.length; index++) {
      let element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)

  }




  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}} >
      {props.children}
    </NoteContext.Provider>
  )



}








export default NoteState;