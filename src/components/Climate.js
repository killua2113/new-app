import React, { Component } from "react";
import searchimg  from "../images/searchicon1.png"
// import PropTypes from 'prop-types'

export default class Climate extends Component {

    constructor(){
        super()
        this.state={
            name:"Delhi",
            weather:[],
            main:{},
            wind:{},
            mausam:"haze",
            imageSrc:"",
            bgimage: "http://source.unsplash.com/1600x900/?Delhi"
            
            

        }
    }


    async componentDidMount(){
      this.props.setprogress(10);
        
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&units=metric&appid=eb7b59ba4512b61cd5b338f9b96e9c75`
  
          let data= await fetch(url)
      this.props.setprogress(40);

          let parsedata=await data.json()
      this.props.setprogress(70);

        //   console.log(parsedata)
        let abc=parsedata.weather[0].main
        let icon1=parsedata.weather[0].icon
        // let city1=parsedata.name
          this.setState({
            // name:parsedata.name,
            weather:parsedata.weather,
            main:parsedata.main,
            wind:parsedata.wind,
            mausam:abc,
            imageSrc:"https://openweathermap.org/img/wn/"+icon1+"@2x.png",
          


          })
          this.props.setprogress(90);
          console.log(this.state.bgimage)
          this.props.setprogress(100);
      }




    searchclicked= async()=>{
        console.log("clicked")
      let city=document.getElementById("searchb")
      this.props.setprogress(10);
      let cityname=city.value ;
      console.log(cityname)
    //   this.setState({
    //       name:cityname
    //   })
      
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=eb7b59ba4512b61cd5b338f9b96e9c75`
  
          let data= await fetch(url)
          this.props.setprogress(40);
          let parsedata=await data.json()
          this.props.setprogress(70);
          let bcd=parsedata.weather[0].main
        let icon1=parsedata.weather[0].icon
        // let city2=parsedata.name

          
          this.setState({
            name:parsedata.name,
            weather:parsedata.weather,
            main:parsedata.main,
            wind:parsedata.wind,
            mausam:bcd,
            imageSrc:"https://openweathermap.org/img/wn/"+icon1+"@2x.png",
            bgimage:"http://source.unsplash.com/1600x900/?"+cityname

            


          })
          this.props.setprogress(90);
          console.log(this.state.bgimage)
          city.value=""
          this.props.setprogress(100);
         

      }





  render() {
    
    


         





    return (
//   background-image: url("http://source.unsplash.com/1600x900/?weather forecast");
  <div className="body"  style={{backgroundImage:`url(${this.state.bgimage})`}}   >
        <div className="Ccard">
            <div className="search">
                <input type="text" className="search-bar" id="searchb" placeholder="search city" />
                <button className="inputbutton"  onClick={this.searchclicked} >
                    <img src={searchimg} alt="" />
                </button>

            </div>
            <div  className="weather">
                <div>
                    <h2 className="city" > Weather in {this.state.name}</h2>
                    {/* <div className="temp" > 43°C </div> */}
                    <div><h1>{this.state.main.temp}°C <h6>     Feelslike {this.state.main.feels_like}°C </h6> </h1></div>
                    <div className="iconimage"><img src={this.state.imageSrc} alt="" /></div>
                    <img src="" alt="" className="icon" />
                    <div className="otherdata">
                    <div className="description"><pre>{this.state.mausam}</pre></div>
                    <div className="humidity"><pre>Humidity   {this.state.main.humidity}</pre></div>
                    <div className="wind"><pre>wind speed   {this.state.wind.speed}kmph</pre></div>
                    </div>
                </div>

            </div>

        </div>
      </div>
    );
  }
}
