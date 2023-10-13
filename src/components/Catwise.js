import React, { Component } from "react";
import NewsItem from "./NewsItem";
import img2 from "../images/logo1.png";

export default class Catwise extends Component {
  constructor() {
    super();
    this.state = {
      businessarticles: [],
      teslaarticles: [],
      applearticles: [],
      loading: false,
      bpage: 1,
    };
  }
  business = async () => {
    this.setState({loading:true})

    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c7f26f9d54f04d6183557cd8658b8168";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ businessarticles: parsedata.articles, bpage: 2 ,loading:false});
  };
  tesla = async () => {
    this.setState({loading:true})


    let url =
    "https://newsapi.org/v2/everything?q=apple&from=2022-05-26&to=2022-05-26&sortBy=popularity&apiKey=c7f26f9d54f04d6183557cd8658b8168";;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ teslaarticles: parsedata.articles, bpage: 2,loading:false });
  };
  apple = async () => {
    this.setState({loading:true})

    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2022-05-26&to=2022-05-26&sortBy=popularity&apiKey=c7f26f9d54f04d6183557cd8658b8168";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ applearticles: parsedata.articles, bpage: 2 ,loading:false});
  };
  businesshide = () => {
    this.setState({ businessarticles: [] });
  };
  teslahide = () => {
    this.setState({ teslaarticles: [] });
  };
  applehide = () => {
    this.setState({ applearticles: [] });
  };
  render() {
    if(!this.state.loading)
    {
      return (
        <div>
         <h2 id="upperbox">News on different fields</h2>
         <hr />
         <div className="card">
           <div className="card-body1">
             <h5 className="card-title my-3">
               Top business headlines in the US right now
             </h5>
             {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
             <button
               type="button"
               className="btn btn-primary hbtn "
               onClick={this.business}
             >
               Show all articles...
             </button>
             <button
               type="button"
               className="btn btn-primary hbtn "
               onClick={this.businesshide}
             >
               Hide
             </button>
           </div>
           <div className="business row ">
             {this.state.businessarticles.map((element) => {
               return (
                 <div className="col-md-3 mx-3 my-2 " key={element.url}>
                   <NewsItem
                     title={element.title ? element.title.slice(0, 35) : ""}
                     description={
                       element.description
                         ? element.description.slice(0, 40)
                         : ""
                     }
                     ImageUrl={element.urlToImage ? element.urlToImage : img2}
                     NewsUrl={element.url}
                   />
                 </div>
               );
             })}
           </div>
 
           <hr />
           <div className="card-body1">
             <h5 className="card-title my-3">
               All articles about Tesla from the last month
             </h5>
             {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
             <button
               type="button"
               className="btn btn-primary hbtn "
               onClick={this.tesla}
             >
               Show all articles...
             </button>
             <button
               type="button"
               className="btn btn-primary hbtn "
               onClick={this.teslahide}
             >
               Hide
             </button>
           </div>
           <div className="business row ">
             {this.state.teslaarticles.map((element) => {
               return (
                 <div className="col-md-3 mx-3 my-2 " key={element.url}>
                   <NewsItem
                     title={element.title ? element.title.slice(0, 35) : ""}
                     description={
                       element.description
                         ? element.description.slice(0, 40)
                         : ""
                     }
                     ImageUrl={element.urlToImage ? element.urlToImage : img2}
                     NewsUrl={element.url}
                   />
                 </div>
               );
             })}
           </div>
           <hr />
           <div className="card-body1">
             <h5 className="card-title my-3">
               All articles about Apple from the last month
             </h5>
             {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
             <button
               type="button"
               className="btn btn-primary hbtn "
               onClick={this.apple}
             >
               Show all articles...
             </button>
             <button
               type="button"
               className="btn btn-primary hbtn "
               onClick={this.applehide}
             >
               Hide
             </button>
           </div>
           <div className="business row ">
             {this.state.applearticles.map((element) => {
               return (
                 <div className="col-md-3 mx-3 my-2 " key={element.url}>
                   <NewsItem
                     title={element.title ? element.title.slice(0, 35) : ""}
                     description={
                       element.description
                         ? element.description.slice(0, 40)
                         : ""
                     }
                     ImageUrl={element.urlToImage ? element.urlToImage : img2}
                     NewsUrl={element.url}
                   />
                 </div>
               );
             })}
           </div>
           <hr />
         </div>
       </div>
     );
    }
    else
    {
      return;
    }
  }
}
