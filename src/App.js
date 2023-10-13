import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Climate from "./components/Climate";
import News from "./components/News";
// import Catwise from "./components/Catwise";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Notes from "./components/Notes";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

export default class App extends Component {
  // const [alert,setAlert]=useState(null);
  state = {
    progress: 0,
  };
  setprogress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
      <NoteState>
        <Router>
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {" "}
                    <Navbar />{" "}
                    <News
                      setprogress={this.setprogress}
                      category=""
                      country="in"
                    />{" "}
                    {/* <Catwise />{" "} */}
                  </>
                }
              />
              <Route
                path="/sports"
                element={
                  <>
                    <Navbar />
                    <News
                      setprogress={this.setprogress}
                      category="sports"
                      country="in"
                    />
                    {/* <Catwise />{" "} */}
                  </>
                }
              />
              <Route
                path="/science"
                element={
                  <>
                    {" "}
                    <Navbar />{" "}
                    <News
                      setprogress={this.setprogress}
                      category="science"
                      country="in"
                    />
                    {/* <Catwise />{" "} */}
                  </>
                }
              />
              <Route
                path="/entertainment"
                element={
                  <>
                    <Navbar />
                    <News
                      setprogress={this.setprogress}
                      category="entertainment"
                      country="in"
                    />
                    {/* <Catwise />{" "} */}
                  </>
                }
              />
              <Route
                path="/health"
                element={
                  <>
                    <Navbar />
                    <News
                      setprogress={this.setprogress}
                      category="health"
                      country="in"
                    />
                    {/* <Catwise />{" "} */}
                  </>
                }
              />
              <Route
                path="/climate"
                element={
                  <>
                    {" "}
                    <Navbar /> <Climate setprogress={this.setprogress} />
                  </>
                }
              />
              <Route
                path="/notes"
                element={
                  <>
                    {" "}
                    <Navbar />
                    <Home />
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    {" "}
                    <Navbar />
                    <Login setprogress={this.setprogress} />
                  </>
                }
              />
              <Route
                path="/signup"
                element={
                  <>
                    {" "}
                    <Navbar />
                    <Signup setprogress={this.setprogress}/>
                  </>
                }
              />
            </Routes>
            <Footer />
        </Router>
      </NoteState>
      </>
    );
  }
}
