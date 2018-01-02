import React, { Component } from 'react';

class GuestLI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //Toggle to show edit form
      nameConfirmed: true,
      tempName: '',
    }

    this.showNameInput = this.showNameInput.bind(this);
    this.updateName = this.updateName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  showNameInput(name) {
    //Sets tempName to edited guests name and shows form
    this.setState({nameConfirmed: false, tempName: name});
  }

  updateName(e) {
    //temp name is updated on input change
    this.setState({tempName: e.target.value});
  }

  onSubmit(e) {

    const {i, updateName} = this.props;

    e.preventDefault();

    this.setState({nameConfirmed: true});

    const arr = this.props.guests.slice();

    arr[i].name = this.state.tempName;

    //Calls props updateName function to pass array up to GuestList
    updateName(arr);
  }

  render() {
    const {i, pending, guests, toggleConfirm, isConfirmed, onRemove} = this.props;
    const {nameConfirmed, tempName} = this.state;
    return (
      <li key={i} 
          className={pending ? "pending" : "responded"}>
        { //Use nameConfirmed state to toggle between name and edit form
          nameConfirmed ? 
            (<span>{guests[i].name}</span>) 
          : 
            (
            <form 
              className="edit-name-form"
              onSubmit={this.onSubmit}>
              <input 
                type="text" 
                value={tempName}
                onChange={this.updateName}
              />
            </form>
            )
        } 
        {/*toggleConfirm and onRemove bubble up to App to interact with guests array state at top level*/}
        <label>
          <input 
            type="checkbox" 
            checked={isConfirmed} 
            onChange={()=> {toggleConfirm(i)}}
          />
          Confirmed
        </label>
        <button 
          onClick={() => this.showNameInput(guests[i].name)}
        >
        edit
        </button>
        <button onClick={() => {onRemove(i)}}>remove
        </button>
      </li>
    )
  }
};    

export default GuestLI;

