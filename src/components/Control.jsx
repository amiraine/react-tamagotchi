import React from 'react';

function Control(){

  return(
    <div className="control-wrapper">
      <style jsx>{`
        *:focus{
          outline: none;
        }
        .control-wrapper{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin: auto;
          z-index: 3;
          position: absolute;
          top: 65vw;
          left: 30vw;
          width: 40vw;
        }
        .button-wrapper{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        p{
          font-family: sans-serif;
        }
        button{
          background-color: navy;
          height:25px;
          width: 25px;
          border-radius: 50%;
          border: 1px transparent;
          box-shadow: -3px 1px rgba(0,0,0,.5);
          focus: none;
        }
        button:click
      `}</style>
      <div className="button-wrapper">
        <button></button>
        <p>Feed</p>
      </div>
      <div className="button-wrapper">
        <button></button>
        <p>Sleep</p>
      </div>
      <div className="button-wrapper">
        <button/>
        <p>Play</p>
      </div>
    </div>
  )
}

export default Control;
