const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to an application.' });
});

require('./routes/task.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// // const http = require("http");

// const express = require('express');

// const app = express();

// // const adminRoutes = require('./routes/user.routes');
// // const shopRoutes = require('./routes/shop');

// app.use(express.json());

// // app.use(shopRoutes);
// // app.use('/user', userRoutes);

// // const db = require('./app/models');

// // app.get('/', (req, res, next) => {
// //   console.log(req.body);
// //   next();
// // });

// require('./app/routes/turorial.routes')(app);

// app.listen(3000);

// // const server = http.createServer(app);

// // server.listen(3000);
