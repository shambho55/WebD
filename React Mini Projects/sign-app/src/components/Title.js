import React from 'react';

const title = ({Text}) => {
  return (
    <>
        <div className='container'>
            <h1 className='text-center mt-3'>{!Text ? 'text' : Text}</h1>
        </div>
    </>
  )
}

export default title