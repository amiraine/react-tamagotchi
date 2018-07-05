import React from 'react';

function Status(){

  return(
    <div className="status">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
        .status{
          width: 40vw;
          grid-gap: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          position: relative;
          top
        }
        img{
          height: 32px;
        }
        .status-wrappers{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p{
          font-family: 'Press Start 2P', sans-serif;
          font-size: 1.3em;
        }
      `}</style>
      <div className="status-wrappers">
        <img src="https://png.icons8.com/ios/1600/cutlery.png"/><p>:100</p>
      </div>
      <div className="status-wrappers">
        <img src="https://png.icons8.com/material/1600/sleep.png"/><p>:100</p>
      </div>
      <div className="status-wrappers">
        <img src="https://png.icons8.com/ios/1600/smiling.png"/><p>:100</p>
      </div>
    </div>
  )
}

export default Status;
