const express = require('express');
const router = express.Router();
const { Weather } = require('../models/weatherModel.js');

// THIS WORKS
// router.get('/addWeather', (req, res) => {
//   const newWeather = { city: 'Kitchener', country: 'CA', temperature: 15.11 };
//   const saveWeather = Schemas.Weather(newWeather);

//   saveWeather
//     .save()
//     .then(() => {
//       console.log('weather saved!');
//       res.end('New Weather Saved');
//     })
//     .catch((error) => {
//       console.log(error.message);
//       res.end(error.message);
//     });
// });

//async function sorts database and pulls most recent entry
async function getMostRecent() {
  try {
    mostRecent = await Weather.findOne().sort({ _id: -1 });

    return mostRecent;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

//router to recent search gets most recent
router.get('/recent-search', async (req, res) => {
  try {
    const mostRecentNote = await getMostRecent();
    if (mostRecentNote) {
      res.end(JSON.stringify(mostRecentNote));
    } else {
      res.status(404).json({ message: 'no weather saved in database!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/api/data', (req, res) => {
  const reqCity = req.body.city;
  const reqCountry = req.body.country;
  const reqTemp = req.body.temp;

  const newWeather = {
    city: reqCity,
    country: reqCountry,
    temperature: reqTemp,
  };
  const saveWeather = Weather(newWeather);

  saveWeather
    .save()
    .then(() => {
      console.log(`${reqCity} weather saved!`);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
