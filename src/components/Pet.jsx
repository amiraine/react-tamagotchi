import React from 'react';
import PropTypes from 'prop-types';
import alive from '../assets/images/alive.gif';
import sick from '../assets/images/unwell.gif';
import dead from '../assets/images/dead.png';
import ranaway from '../assets/images/ranaway.png';

function Pet(props){
  let petimage;

  if(props.hunger > 50 || props.sleep >50 || props.fun > 50){
    petimage = alive;
  } else if (props.alive === false && props.hunger === 0){
    petimage = dead;
  } else if (props.hunger + props.sleep + props.fun <=150){
    petimage = sick;
  } else if (props.adopted === false || props.fun === 0 && props.hunger + props.sleep >0){
    petimage = ranaway;
  }
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
          padding: 10vw;
        }
        img{
          height: 20vw;
          padding-bottom: 100px;
        }
      `}</style>

    <img src={petimage}/>
    </div>
  )
}
Pet.propTypes = {
  hunger: PropTypes.number,
  sleep: PropTypes.number,
  fun: PropTypes.number,
  alive: PropTypes.bool,
  adopted: PropTypes.bool
}

export default Pet;
