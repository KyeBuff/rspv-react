import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import GuestList from './components/GuestList';
import Form from './components/Form';
import NotResponded from './components/NotResponded';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      guests: [
      ],
      newGuestName: '',
      showConfirmed: false,
    }

    this.newPendingGuest = this.newPendingGuest.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.toggleNotResponded = this.toggleNotResponded.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  getTotalInvited(){
    return this.state.guests.length;
  } 

  getTotalUnconfirmed() {
    const unconfirmed = this.state.guests.filter((el) => {
      return !el.isConfirmed;
    });

    return unconfirmed;
  }

  getAttending() {
    return this.getTotalInvited() - this.getTotalUnconfirmed().length;
  }

  newPendingGuest(e) {

    //Used to create a new li to populate UI
    //Pending bool controls class of li
    const guestsArr = [...this.state.guests];
    const pendingGuest = {
      name: null,
      isConfirmed: false,
      pending: true,
    }

    const newGuestName = e.target.value;

    //Only push once if a new guest name is typed
    if(!this.state.newGuestName) {
      guestsArr.push(pendingGuest);
      this.setState({guests: guestsArr});
    } 

    //update new guestName variable onchange
    this.setState({newGuestName});

    //update guest name on change, using array element targeting as pendingGuest is now in array
    guestsArr[guestsArr.length-1].name = newGuestName;

    //if name value is empty, remove last arr el
    if(newGuestName.length === 0) {
      guestsArr.pop();
    }

    this.setState({guests: guestsArr});

  }

  onFormSubmit(e) {
    e.preventDefault();

    const guestsArr = [...this.state.guests];

    //Update added guests pending status to false
    guestsArr[guestsArr.length-1].pending = false;

    this.setState({guests: guestsArr, newGuestName: ''});

  }

  removeGuest(i) {
    const guestsArr = [...this.state.guests];

    guestsArr.splice(i, 1);

    this.setState({guests: guestsArr}); 
  }

  toggleNotResponded() {

    this.setState({showConfirmed: !this.state.showConfirmed});

  }

  toggleConfirm(i) {
    const guestsArr = [...this.state.guests];

    guestsArr[i].isConfirmed = !guestsArr[i].isConfirmed;

    this.setState({guests: guestsArr}); 
  }

  updateName(arr) {
    this.setState({guests: arr});
  }

  render() {
    const {newGuestName, showConfirmed, guests} = this.state;
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <Form 
            newPendingGuest={this.newPendingGuest} 
            value={newGuestName} 
            onFormSubmit={this.onFormSubmit}/>
        </header>
        <div className="main">
          <NotResponded toggleNotResponded={this.toggleNotResponded} />
          <Counter 
            invited={this.getTotalInvited()} 
            unconfirmed={this.getTotalUnconfirmed()} 
            attending={this.getAttending()}/>
          <GuestList 
            guests={
              showConfirmed ?
                guests.filter((el) => {
                  return el.isConfirmed;
                })
              :
                guests
            } 
            onRemove={this.removeGuest}
            onEdit={this.editGuest}
            toggleConfirm={this.toggleConfirm}
            updateName={this.updateName}
            />
        </div>
      </div>
    );
  }
}

export default App;

