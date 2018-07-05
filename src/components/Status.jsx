import React from 'react';
import PropTypes from 'prop-types';

function Status(props){
  return(
    <div className="status">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
        .status{
          width: 38vw;
          grid-gap: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          position: relative;
          top: 14vw;
          left: 21vw;
          z-index: 4;
        }
        img{
          height: 32px;
        }
        .status-wrappers{
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        p{
          font-family: 'Press Start 2P', sans-serif;
          font-size: 1em;
        }
      `}</style>
      <div className="status-wrappers">
        <img src="https://png.icons8.com/ios/1600/cutlery.png"/><p>: {props.hunger}</p>
      </div>
      <div className="status-wrappers">
        <img src="https://png.icons8.com/material/1600/sleep.png"/><p>: {props.sleep}</p>
      </div>
      <div className="status-wrappers">
        <img src="https://png.icons8.com/ios/1600/smiling.png"/><p>: {props.fun}</p>
      </div>
    </div>
  )
}

Status.propTypes = {
  hunger: PropTypes.number,
  sleep: PropTypes.number,
  fun: PropTypes.number
}
export default Status;
