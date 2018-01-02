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

  showNameInput(name) {
    this.setState({nameConfirmed: false, tempName: name});
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
              className="edit-name-form"
              onSubmit={this.onSubmit}>
              <input 
              type="text" 
              value={this.state.tempName}
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
          onClick={() => this.showNameInput(this.props.guests[this.props.i].name)}
        >edit</button>
        <button onClick={() => {this.props.onRemove(this.props.i)}}>remove
        </button>
      </li>
    )
  }
};    

export default GuestLI;

