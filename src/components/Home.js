// import react from "react";
// import { useContext } from "react";
// import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";
import Addnote from "./Addnote";
// import Loader from "./Loading";

const Home = () => {
  // const [progress,setprogress]=useState(props.setprogress)
  // const context = useContext(noteContext);
  // const { notes, setNotes } = context;
  // // console.log(context)
  return (
    <div className="container inotes ">
      <Addnote   />
      <Notes  />
    </div>
  );
};

export default Home;
