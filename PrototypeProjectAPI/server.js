const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({limit: '50mb'}));

//api routes
app.use('/users', require('./tables/userTable/user.controller'));

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4001;

app.listen(port), ( ()=> console.log('Server listening on port ' + PORT));