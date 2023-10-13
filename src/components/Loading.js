import React, { Component } from 'react'
import loader from "../images/spinner.gif";

export default class loading extends Component {
  render() {
    return (
      <div>
          <div className='text-center' >
              <img src={loader} alt="" />
          </div>

        
      </div>
    )
  }
}
