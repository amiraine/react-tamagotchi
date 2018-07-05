import React from 'react';

function Title(){

  return(
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Knewave');
        h1{
          font-family: 'Knewave', sans-serif;
          text-align: center;
          position: relative;
          top: 8vw;
          color: #faff00;
          font-size: 3em;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
      `}</style>
      <h1>Tamagotchi</h1>
    </div>
  );
}
export default Title;
