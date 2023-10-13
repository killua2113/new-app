import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import img2 from "../images/logo1.png";
import Loader from "./Loading";
import PropTypes from 'prop-types'
const BASE_URL=process.env.BASE_URL



export class News extends Component {
  static defaultProps={
    country:"in",
    category:""

  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
        constructor(){
        super()
        this.state={
            articles: [],
            loading:false,
            page:1,
            totalresult:0
        }
    }
    async componentDidMount(){
      this.setState({loading:true})
      this.props.setprogress(10);
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7f26f9d54f04d6183557cd8658b8168&page=${this.state.page}&pageSize=12`
      let url=`http://localhost:5000/${this.props.category}`
        let data= await fetch(url)
        console.log(BASE_URL)
      this.props.setprogress(50);

        let parsedata=await data.json()
      this.props.setprogress(70);

        console.log(parsedata)
        this.setState({articles:parsedata,
        totalresult:parsedata.length,
      loading:false})
      this.props.setprogress(100);

    }
    Previouspage= async()=>{
      this.setState({loading:true})
      this.props.setprogress(10);

        
        
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7f26f9d54f04d6183557cd8658b8168&page=${this.state.page-1}&pageSize=12`
      let url=`http://localhost:5000/${this.props.category}`
      let data= await fetch(url)
      this.props.setprogress(50);

        let parsedata=await data.json()
      this.props.setprogress(70);

        this.setState({articles:parsedata,
        page:this.state.page-1,
      loading:false})
      this.props.setprogress(100);

    }
    Nextpage= async()=>{
        if(this.state.page+1 <= Math.ceil(this.state.totalresult/12))
      {
      this.setState({loading:true})
      this.props.setprogress(10);


          console.log("next")
          let url=`http://localhost:5000/${this.props.category}`
          // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7f26f9d54f04d6183557cd8658b8168&page=${this.state.page+1}&pageSize=12`
        let data= await fetch(url)
      this.props.setprogress(50);

        let parsedata=await data.json()
      this.props.setprogress(70);

        this.setState({articles:parsedata,
        page: this.state.page+1, loading:false})
        }
      this.props.setprogress(100);

    }
  render() {
    return (
      
        <div className="container my-3" id="mainbox">
          <div id="headline" >

            <h2>Today's Top Headline</h2>
          </div>
        
            { this.state.loading && <Loader/>}
            <hr />
              <div className="row">
            
                 {this.state.articles.map((element)=>{
                   return(
                   < div className="col-md-3 mx-3 my-2 " key={element.url} >
                   <NewsItem
                   
                    title={element.title?element.title.slice(0,35):""}
                    description={element.description?element.description.slice(0,40):""}
                    ImageUrl={element.urlToImage}
                    NewsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                  </div>
                  )
                })}
                  
                  
                  <div className="container d-flex justify-content-between ">
                    <button disabled={this.state.page<=1}  type="button" className="btn btn-danger"  onClick={this.Previouspage} > &larr;Previous</button>
                    <button type="button" className="btn btn-danger" onClick={this.Nextpage} > Next &rarr; </button>
                  </div>
                  
                  
              
           
          </div>
        </div>
      
    );
  }
}

export default News;
