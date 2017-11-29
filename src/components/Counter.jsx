import React from 'react';

let Counter = (props) => (
  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{props.attending}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{props.unconfirmed.length}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{props.invited}</td>
      </tr>
    </tbody>
  </table>
);    

export default Counter;
