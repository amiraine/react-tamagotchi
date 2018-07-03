import React from 'react';

function CreatePet(){
  return(
    <div>
      <form>
        <label>What's your name?</label>
        <input type='text' placeholder='Enter your name' required/>
        <label>Name your pet!</label>
        <input type='text' placeholder="Enter pet name" required/>
        <button type='submit' onClick={this.handleClick}>Go!</button>
      </form>
    </div>
  );
}


export default CreatePet;
