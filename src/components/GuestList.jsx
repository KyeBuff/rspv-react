import React from 'react';
import GuestLI from './GuestLI';

let GuestList = (props) => (
  <ul>
      {
      // Iterate through array
      //Map guest to an li
        props.guests.map((el, i) => (
          <GuestLI 
          	key={i} 
          	isConfirmed={el.isConfirmed} 
          	isPending={el.isPending} 
          	onRemove={props.onRemove} 
          	onEdit={props.editGuest}
          	toggleConfirm={props.toggleConfirm}
          	updateName={props.updateName}
          	guests={props.guests}
          	i={i}
          />
        ))
      }
  </ul>
);    

export default GuestList;
