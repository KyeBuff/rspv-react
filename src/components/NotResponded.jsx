import React from 'react';

let NotResponded = (props) => (
  <div>
    <h2>Invitees</h2>
    <label>
      <input type="checkbox" onChange={props.toggleNotResponded} /> Hide those who haven't responded
    </label>
  </div>
);    

export default NotResponded;
