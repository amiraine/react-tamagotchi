import React from 'react';
import Title from './Title';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Title/>
      </div>
    );
  }
}

export default App
