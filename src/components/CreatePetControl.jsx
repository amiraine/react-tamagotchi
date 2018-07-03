import React from 'react';
import CreatePet from './CreatePet';
import Pet from './Pet';


class CreatePetControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({formVisible: false});
  }

  render(){
    let formVisible = null;
    if (this.state.formVisible) {
      formVisible  = <CreatePet/>;
    } else {
      formVisible = <Pet/>
    }
    return (
      <div>
        {formVisible}
      </div>
    );
  }
}

export default CreatePetControl;
