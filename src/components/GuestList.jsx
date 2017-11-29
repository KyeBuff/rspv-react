import React from 'react';
import GuestLI from './GuestLI';

let GuestList = (props) => (
  <ul>
      {
      // Iterate through array
      //Map guest to an li
        props.guests.map((el, i) => (
          <GuestLI name={el.name} isConfirmed={el.isConfirmed} isPending={el.isPending} index={i} />
        ))
      }
  </ul>
);    

export default GuestList;
