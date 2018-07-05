import React from 'react';
import Status from './Status';
function Pet(){

  return(
    <div className="pet">
      <style jsx>{`
        .pet{
          height: 40vw;
          width: 40vw;
          position: relative;
          z-index: 1;
          background-color: #ddd;
          top: 8vw;
          left: 20vw;
          border: 10px solid #faff00;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: -3px 3px 5px rgba(0,0,0,.5);
          flex-direction: column;
        }
        img{
          height: 20vw;
          padding-bottom: 100px;
        }
      `}</style>
      <Status/>
      <img src="https://78.media.tumblr.com/7dc715287c03db5605370b38e81f91ff/tumblr_mwkliziKZA1scncwdo1_500.gif"/>
    </div>
  )
}

export default Pet;
