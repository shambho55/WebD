import React from 'react';

const Slide = ({sl,handleInput,textColor,bgColor}) => {
  return (
    <div>
        <input type='range' min={0} max={100} value={sl} onInput={handleInput}/> 
        <div className='circle' style={{
            color: !textColor ? "red" : textColor,
            background : !bgColor ? "violet" : bgColor,
            height: `${sl * 3}px`,
            width : `${sl * 3}px`
        }}>
            <span>{sl}</span>
        </div>
    </div>
  )
}

export default Slide;