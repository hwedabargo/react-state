import './App.css';
import React, { Component } from 'react'
import img from "./img/Hweda Bargo.jpg"

export default class app extends Component {
  state = {
      FullName: "Hweda Bargo",
      imgSrc: img ,
      profission: "Mobile and website application developer, data analysis and e-marketing",
      show: false,
      counter: 0,
  }
  onClickhandler() {
      this.setState({
          show: !this.state.show,
      })
  }
  //file for time
  componentDidMount() {
      this.setState({ counter: 0 })
      setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  {this.state.show === true ? <div><img src={this.state.imgSrc} alt='' />
                      <h1>{this.state.FullName}</h1>
                      <h4>{this.state.profission}</h4>
                     </div> : <div></div>}
                     <br/>
                  <p >It's been {this.state.counter} seconds since the component was displayed</p>
                  <button className='btn' onClick={() => this.onClickhandler()}>show</button>
                  
              </header>
          </div>
      )
  }
}
