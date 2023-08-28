const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routesHandler = require('./routes/router.js');
require('dotenv/config');

//DB Connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

// if (process.env.NODE_ENV === 'production') {
//   //static files
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   //React routing
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', routesHandler));
//   });
// }

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app listening http://localhost:${port}/`);
});
