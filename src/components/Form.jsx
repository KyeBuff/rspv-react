import React from 'react';

let Form = (props) => (
  <form onSubmit={props.onFormSubmit}>
    <input 
    	type="text" 
    	onChange={props.newPendingGuest} 
    	value={props.value} 
    	placeholder="Invite Someone" 
    />
    <button 
    	type="submit" 
    	name="submit" 
    	value="submit"
    >
    Submit
    </button>
  </form>
);    

export default Form;
