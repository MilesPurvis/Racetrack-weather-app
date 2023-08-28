import React, { useState } from 'react';

const CityInput = (props) => {
  const [enterdCity, setEnteredCity] = useState('');
  const [isValid, setIsValid] = useState(false);

  const cityInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredCity(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enterdCity.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onFind(enterdCity);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='input-group mb-3'>
        <input
          type='text'
          onChange={cityInputChangeHandler}
          className='form-control'
          placeholder='Enter City'
        />
        <button
          className='btn btn-outline-secondary'
          type='submit'
          id='button-addon2'
        >
          Find
        </button>
      </div>
    </form>
  );
};

export default CityInput;
