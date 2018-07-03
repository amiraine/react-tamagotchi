import React from 'react';
import CreatePet from './CreatePet';
import Pet from './Pet';


class CreatePetControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false
    };
    this.madePet = this.madePet.bind(this);
  }
  madePet(){
    this.setState({formVisible: true});
  }

  render(){
    let currentlyVisible = null;
    if (this.state.formVisible) {
      currentlyVisible  = <Pet/>;
    } else {
      currentlyVisible = <CreatePet onMadePet = {this.madePet}/>;
    }
    return (
      <div>
        {currentlyVisible}
      </div>
    );
  }
}

export default CreatePetControl;
