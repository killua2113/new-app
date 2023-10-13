import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import img2 from "../images/logo1.png";
import Img1 from"../images/bgimage.jpg";

// import img3 from"../images/logo2.png"

export class newsItem extends Component {
  render() {
    let { title, description ,ImageUrl,NewsUrl,time,author,source} = this.props;
    return (
      <div>
        

        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}} >
    {source}
   
  </span>
        <img src={ImageUrl?ImageUrl:Img1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> Author: {author?author:"Unknown"}</small></p>
            <p className="card-text"><small className="text-muted">Published at: {new Date(time).toGMTString()}</small></p>

            <a href={NewsUrl} target="_blank" className="btn btn-primary" rel="noreferrer" >Read Full Article...</a>
          </div>
        </div>
      </div>
    );
  }
}

export default newsItem;
