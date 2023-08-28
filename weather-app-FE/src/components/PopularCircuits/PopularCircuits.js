import React from 'react';

const PopularCircuits = (props) => {
  const circuitSubmitHandler = (event) => {
    props.clickedCircuit(event.target.id);
  };

  return (
    <div className='container border-bottom m-3'>
      <h3>Popular Circuits</h3>
      <div className='list-group'>
        <input
          className=' list-group-item list-group-item-action list-group-item-light'
          type='button'
          value='GrandBend'
          id='Grand Bend'
          onClick={circuitSubmitHandler}
        />

        <input
          className=' list-group-item list-group-item-action list-group-item-light'
          type='button'
          value='Nurburgring'
          id='Nurburg'
          onClick={circuitSubmitHandler}
        />

        <input
          className=' list-group-item list-group-item-action list-group-item-light'
          type='button'
          value='Silverstone'
          id='Silverstone'
          onClick={circuitSubmitHandler}
        />
      </div>
    </div>
  );
};

export default PopularCircuits;
