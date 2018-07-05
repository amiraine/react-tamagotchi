import React from 'react';
import Title from './Title';
import Pet from './Pet';
import Control from './Control';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hunger: 100,
      sleep: 100,
      fun: 100,
      feed: false,
      rest: false,
      play: false,
      alive: true
    }
    this.handleFood = this.handleFood.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    console.log(this.state);
  }
  componentDidMount(){
    this.deathTimer = setInterval(()=>
      this.statDecrement(), 3000);
  }
  statDecrement(){
    this.state.hunger -= 5;
    this.state.sleep -= 5;
    this.state.fun -= 5;
  }

  handleFood(){
    this.setState({hunger: this.state.hunger += 5})
    console.log(this.state.hunger);
  }
  handleSleep(){
    this.setState({sleep: this.state.sleep +=5});
    console.log(this.state.sleep);
  }

  render(){
    return(
      <div>
        <style jsx>{`
          .frame{
            background: #ff1e8b;
            height: 80vw;
            width: 80vw;
            -webkit-clip-path: ellipse(43% 50% at 50% 50%);
            clip-path: ellipse(43% 50% at 50% 50%);
            margin: auto;
          }
        `}</style>
        <div className="frame">
          <Title/>
          <Pet/>
          <Control/>
        </div>
      </div>
    );
  }
}

export default App;
