import React, { Component } from 'react';

class GuestLI extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <li key={this.props.i} 
          className={this.props.pending ? "pending" : "responded"}>
        <span>{this.props.name}</span>
        <label>
          {
            this.props.isConfirmed ?
              (
              <input type="checkbox" checked />
              ) 
            : 
              (
              <input type="checkbox" /> 
              )
          }
          Confirmed
        </label> 
        <button>edit
        </button>
        <button>remove
        </button>
      </li>
    )
  }
};    

export default GuestLI;

//input on change callback

//all functions need to be pased down as props from GuestList.jsx

//Checkbox
// onChange={() => {props.onConfirm(i)}}

//remove button 
// onClick={() => {props.onRemove(i)}}