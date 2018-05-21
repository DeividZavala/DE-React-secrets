require('dotenv').config();


const express        = require("express");
const path           = require("path");
const favicon        = require("serve-favicon");
const logger         = require("morgan");
const cookieParser   = require("cookie-parser");
const bodyParser     = require("body-parser");
const cors           = require("cors");
const session        = require("express-session");
const passport       = require("./config/passport");
const mongoose     = require('mongoose');



mongoose.Promise = Promise;
mongoose
  .connect('mongodb://Otni:otni@ds113700.mlab.com:13700/heroku-mongolab', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();
const options = {
  credentials:true,
  origin:true
}
app.use(require('cors')(options));




// Session
app.use(session({
  secret: "lab-angular-authentication",
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());






const authController = require("./routes/authController");

app.use('/api', authController);
app.all('/*', (req, res) => {
  res.send('Esto si funca aqui debe de ir eso del static y el index html en donde va todo lo que haremos en el front end');
});

module.exports = app;
