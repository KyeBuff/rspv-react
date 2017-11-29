import React from 'react';

let Counter = (props) => (
  <ul>
    {
      // Iterate through array
      //Map guest to an li
      props.guests.map((el, i) => {

        return el.pending ? 
              (
                <li key={i} className="pending"><span>{el.name}</span></li>
              )
            : 
              (
                <li key={i} className="responded"><span>{el.name}</span>
                  <label>
                    {
                      el.isConfirmed ?
                        (
                        <input type="checkbox" checked onChange={() => {props.onConfirm(i)}} />
                        ) 
                      : 
                        (
                        <input type="checkbox" onChange={() => {props.onConfirm(i)}} /> 
                        )
                    }
                    Confirmed
                  </label>
                  <button onClick={() => {props.onEdit(i)}}>edit</button>
                  <button 
                    onClick={() => {props.onRemove(i)}}
                  >remove</button>
                </li>
            );
          } 
        )
    }
  </ul>
);    

export default Counter;
