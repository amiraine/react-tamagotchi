import React from 'react';
import Title from './Title';
import Pet from './Pet';
import Control from './Control';
import Status from './Status';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hunger: 100,
      sleep: 100,
      fun: 100,
      alive: true,
      adopted: true,
    }
    this.handleFood = this.handleFood.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    console.log(this.state);
    let currentHunger = this.state.hunger;
    let currentSleep = this.state.sleep;
    let currentFun = this.state.fun;
  }

  componentDidMount(){
    this.deathTimer = setInterval(() =>
      this.statDecrement(), 3000
    );
    console.log(this.state.alive);
    console.log(this.state.adopted);
  }

  statDecrement(){
    let currentHunger = this.state.hunger -= 5;
    let currentSleep = this.state.sleep -= 5;
    let currentFun = this.state.fun -= 5;
    let currentAlive = true;
    let currentAdopt = true;
    if (currentHunger <= 0){
      currentHunger = 0;
      currentAlive = false;
    }
    if (currentSleep <= 0){
      currentSleep = 0;
      currentAlive = false;
    }
    if (currentFun <= 0){
      currentFun = 0;
      currentAdopt = false;
    }
    this.setState({
      hunger: currentHunger,
      sleep: currentSleep,
      fun: currentFun,
      alive: currentAlive,
      adopted: currentAdopt
    });
  }

  handleFood(){
    this.setState({hunger: this.state.hunger += 5})
    console.log(this.state.hunger);
  }
  handleSleep(){
    this.setState({sleep: this.state.sleep +=5});
  }
  handlePlay(){
    this.setState({fun: this.state.fun +=5});
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
          <Status
            hunger = {this.state.hunger}
            sleep = {this.state.sleep}
            fun = {this.state.fun}
          />
          <Pet
            hunger = {this.state.hunger}
            sleep = {this.state.sleep}
            fun = {this.state.fun}
            adopted = {this.state.adopted}
            alive = {this.state.adopted}
          />
          <Control
            onHandleFeed = {this.handleFood}
            onHandlePlay = {this.handlePlay}
            onHandleSleep = {this.handleSleep}
          />
        </div>
      </div>
    );
  }
}

export default App;
