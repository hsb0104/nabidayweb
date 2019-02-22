const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const exphbs = require('express-handlebars');
const mongoose = require('mongoose');


const app = express();

const uri = 'mongodb://hsb0104:paul371621@nabiweb-emails-shard-00-00-cvy5u.mongodb.net:27017,nabiweb-emails-shard-00-01-cvy5u.mongodb.net:27017,nabiweb-emails-shard-00-02-cvy5u.mongodb.net:27017/nabiweb?ssl=true&replicaSet=nabiweb-emails-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(uri)
    .then(()=> console.log('MongoDB Connected...'))
    .catch((err) => {
        console.log(err)
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
