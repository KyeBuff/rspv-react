import React, { Component } from 'react';

class GuestLI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameConfirmed: true,
      tempName: '',
    }

    this.showNameInput = this.showNameInput.bind(this);
    this.updateName = this.updateName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  showNameInput() {
    this.setState({nameConfirmed: false});
  }

  updateName(e) {
    this.setState({tempName: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({nameConfirmed: true});

    const arr = this.props.guests.slice();

    arr[this.props.i].name = this.state.tempName;

    this.props.updateName(arr);
  }

  render() {
    return (
      <li key={this.props.i} 
          className={this.props.pending ? "pending" : "responded"}>
        { this.state.nameConfirmed ? 
            (<span>{this.props.guests[this.props.i].name}</span>) 
          : 
            (
            <form 
              style={{display: 'inline', margin: 0, border: 0}}
              onSubmit={this.onSubmit}>
              <input 
              type="text" 
              value={this.state.name}
              onChange={this.updateName}
              />
            </form>
            )
        } 
        <label>
          <input 
            type="checkbox" 
            checked={this.props.isConfirmed} 
            onChange={()=> {this.props.toggleConfirm(this.props.i)}}
          />
          Confirmed
        </label>
        <button 
        onClick={() => {
          this.showNameInput();
        }}
        >edit</button>
        <button onClick={() => {this.props.onRemove(this.props.i)}}>remove
        </button>
      </li>
    )
  }
};    

export default GuestLI;

