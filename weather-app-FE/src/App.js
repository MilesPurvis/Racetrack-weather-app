import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PreviousSearch from './components/PreviousSearch/PreviousSearch';
import CityInput from './components/CityInput/CityInput';
import PopularCircuits from './components/PopularCircuits/PopularCircuits';

function App() {
  const [temp, setTemp] = useState(0);
  const [name, setName] = useState('Grand bend');
  const [country, setCountry] = useState('');
  const [conditions, setConditions] = useState('');

  const searchHandler = (enteredText) => {
    setName(enteredText);
  };

  const popularCircuitHandler = (circuit) => {
    setName(circuit);
  };

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.REACT_APP_weather_api_key}`;
    const fetchData = async () => {
      const result = await fetch(URL);

      result.json().then((json) => {
        setTemp(json.main.temp);
        setName(json.name);
        setCountry(json.sys.country);

        fetch('/api/data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ city: name, country: country, temp: temp }),
        }).then((respone) =>
          respone
            .json()
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            })
        );

        if (json.weather[0].description.includes('rain')) {
          setConditions('Not suitable for racing');
        } else setConditions(json.weather[0].description);
      });
    };

    fetchData();
  }, [name]);

  return (
    <div className='App '>
      <div className='container  m-3'>
        <h1 className='display-3'>
          Temp now: <span id='temp'>{temp}</span>c
        </h1>
        <h2 className='display-4'>
          City:<span id='city'> {name}</span>,{' '}
          <span id='country'>{country}</span>
        </h2>
        <h3 className='display-6'>Conditions: {conditions}</h3>
        <CityInput onFind={searchHandler} />
      </div>

      <PopularCircuits clickedCircuit={popularCircuitHandler} />

      <Router>
        <PreviousSearch />
        <p>{}</p>
      </Router>
    </div>
  );
}

export default App;
