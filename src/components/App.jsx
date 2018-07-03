import React from 'react';
import Title from './Title';
import {Route, Switch} from 'react-router-dom';
import CreatePet from './CreatePet';
import CreatePetControl from './CreatePetControl';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Title/>
        <Switch>
          <Route exact path ='/' component={CreatePet} />

        </Switch>
      </div>
    );
  }
}

export default App;
