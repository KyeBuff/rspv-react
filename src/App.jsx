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
        {
          name: 'Treasure',
          isConfirmed: false,
          pending: false,
        },
        {
          name: 'Nick',
          isConfirmed: true,
          pending: false,
        },
      ],
      newGuestName: '',
      showConfirmed: false,
    }

    this.newPendingGuest = this.newPendingGuest.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.toggleNotResponded = this.toggleNotResponded.bind(this);
    this.editGuest = this.editGuest.bind(this);
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

    const guestsArr = this.state.guests.slice();
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

    //update new guestName variable so previous if will not run
    this.setState({newGuestName});


    //update guest name on change
    //will show as a pending guest
    guestsArr[guestsArr.length-1].name = newGuestName;

    //if no new name, remove last arr el
    if(newGuestName.length === 0) {
      guestsArr.pop();
    }

    this.setState({guests: guestsArr});

  }

  onFormSubmit(e) {
    e.preventDefault();

    const guestsArr = this.state.guests.slice();

    guestsArr[guestsArr.length-1].pending = false;

    this.setState({guests: guestsArr, newGuestName: ''});

  }

  removeGuest(i) {
    const guestsArr = this.state.guests.slice();

    guestsArr.splice(i, 1);

    this.setState({guests: guestsArr}); 
  }

  toggleNotResponded() {

    this.setState({showConfirmed: !this.state.showConfirmed});

  }

  editGuest() {

  }

  toggleConfirm(i) {
    const guestsArr = this.state.guests.slice();

    guestsArr[i].isConfirmed = !guestsArr[i].isConfirmed;

    this.setState({guests: guestsArr}); 
  }

  updateName(arr) {
    this.setState({guests: arr});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <Form 
            newPendingGuest={this.newPendingGuest} 
            value={this.state.newGuestName} 
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
              this.state.showConfirmed ?
                this.state.guests.filter((el) => {
                  return el.isConfirmed;
                })
              :
                this.state.guests
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

