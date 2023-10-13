import React, { Component } from "react";
import img2 from "../images/logo1.png";
import img8 from "../images/bbc.png";
import img9 from "../images/cnn.png";
import img10 from "../images/fox.png";
import img11 from "../images/nasa.png";
import img12 from "../images/ftwitter.png";
import img13 from "../images/ffacebook.png";
import img14 from "../images/fpinterest.png";
import img15 from "../images/finsta.png";
import img16 from "../images/fyoutube.png";
import img17 from "../images/fin.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer ">
          <div id="box1">
            <a href="/" id="flogo">
              <img src={img2} alt="" /> <p>The World Affairs</p>{" "}
            </a>
            <ul id="topnews">
              <p>
                {" "}
                <a href="/"> Top News</a>
              </p>
              <li>
                {" "}
                <a href="/"> International relations</a>
              </li>
              <li>
                {" "}
                <a href="/sports"> Sports</a>
              </li>
              <li>
                {" "}
                <a href="/climate"> Climate </a>
              </li>
              <li>
                {" "}
                <a href="/"> Crime</a>
              </li>
              {/* <li>
                {" "}
                <a href="/entertainment"> Hollywood</a>
              </li> */}
            </ul>
          </div>
          <div id="box2">
            <div>
              <h4 id="sponsor">Our Sponsors</h4>
              <ul>
                <li>
                  {" "}
                  <a href="https://www.nasa.gov/" target="_blank"  rel="noreferrer" >
                    {" "} 
                    <img src={img11} alt="" />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="https://www.bbc.com/news"  target="_blank"  rel="noreferrer" >
                    {" "}
                    <img src={img8} alt="" />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="https://edition.cnn.com/" target="_blank"  rel="noreferrer" >
                    {" "}
                    <img src={img9} alt="" />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="https://www.foxnews.com/" target="_blank"  rel="noreferrer" >
                    {" "}
                    <img src={img10} alt="" />{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div id="box3">
            <h4> Other Services</h4>
            <ul>
              <li className="serviceslist">
                {" "}
                <a href="/"> ABC Cinemas </a>
              </li>
              <li className="serviceslist">
                {" "}
                <a href="/"> Lit Music</a>{" "}
              </li>
              <li className="serviceslist">
                {" "}
                <a href="/"> Fricky Sports </a>
              </li>
              <li className="serviceslist">
                {" "}
                <a href="/"> Planet Earth </a>
              </li>
              <li className="serviceslist">
                {" "}
                <a href="/"> Pug Animations</a>
              </li>
              <li className="serviceslist">
                {" "}
                <a href="/"> ABC Gold</a>
              </li>
              {/* <li className="serviceslist">
                {" "}
                <a href="/"> Action Replay </a>
              </li> */}
            </ul>
          </div>
          <div id="box4">
              <ul className="fsmedia" >
                  {/* <li> <b>Follow us on:</b>  </li> */}
                  <h5 id="follow" >Follow us on:</h5>
                  <li  id="ftwitter"><a href="https://www.twitter.com/" target="_blank"  rel="noreferrer"> <img src={img12} alt="" /> </a></li>
                  <li id="ffacebook" ><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" > <img src={img13} alt="" /> </a></li>
                  <li id="fpinterest" ><a href="https://www.pinterest.com/" target="_blank"  rel="noreferrer"> <img src={img14} alt="" /> </a></li>
                  <li id="finsta" ><a href="https://www.instagram.com/" target="_blank"  rel="noreferrer"> <img src={img15} alt="" /> </a></li>
                  <li id="fyoutube" ><a href="https://www.youtube.com/" target="_blank"  rel="noreferrer"> <img src={img16} alt="" /> </a></li>
                  <li id="fin" ><a href="https://www.linkedin.com/" target="_blank"  rel="noreferrer"> <img src={img17} alt="" /> </a></li>
              </ul>
              <hr id="line" />
          </div>
        </div>
      </div>
    );
  }
}
