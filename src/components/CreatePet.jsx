import React from 'react';

function CreatePet(){
  let _name = null;
  let _petname = null;

  function handleCreatePetSubmission(event) {
  event.preventDefault();
  _name.value='';
  _petname.value='';
}

  return(
    <div>
      <form onSubmit={handleCreatePetSubmission}>
        <label>What's your name?</label>
        <input
          type='text'
          placeholder='Enter your name'
          id='name'
          ref={(input)=> {_name = input;}} />
        <label>Name your pet!</label>
        <input
          type='text'
          placeholder="Enter pet name"
          id='petname'
          ref={(input)=> {_petname = input;}} />
        <button type='submit'>Go!</button>
      </form>
    </div>
  );
}


export default CreatePet;
