import express from 'express';
import session from 'express-session';
import config from '../src/config';
import * as actions from './actions/index';
import { mapUrl } from 'utils/url.js';
import PrettyError from 'pretty-error';
import http from 'http';
// import SocketIo from 'socket.io';

let mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  expressJwt = require('express-jwt'),
  morgan = require('morgan'),
  cors = require('cors');

const pretty = new PrettyError();
const app = express();
const server = new http.Server(app);

// const io = new SocketIo(server);
// io.path('/ws');

app.use(session({
  secret: 'react and redux rule!!!!',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));


// ENVIRONMENT CONFIG

mongoose.connect(config.db);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Open connection at : ' + (new Date()).toLocaleString());
});

// EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// JWT config
let jwtSecret = 'thupers3crT$12';
app.set('superSecret', jwtSecret);


app.use((req, res) => {
  const splittedUrlPath = req.url.split('?')[0].split('/').slice(1);
  console.log(`[API Request]:${req.url}`);
  //console.log(`[API Session]:${JSON.stringify(req.session)}`);
  const {action, params} = mapUrl(actions, splittedUrlPath);

  if (action) {
    action(req, params, app)
      .then((result) => {
        if (result instanceof Function) {
          result(res);
        } else {
          res.json(result);
        }
      }, (reason) => {
        if (reason && reason.redirect) {
          res.redirect(reason.redirect);
        } else {
          console.error('API ERROR:', pretty.render(reason));
          res.status(reason.status || 500).json(reason);
        }
      });
  } else {
    res.status(404).end('NOT FOUND');
  }
});


const bufferSize = 100;
const messageBuffer = new Array(bufferSize);
let messageIndex = 0;

if (config.apiPort) {
  const runnable = app.listen(config.apiPort, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
  });

  /*io.on('connection', (socket) => {
    socket.emit('news', {msg: `'Hello World!' from server`});

    socket.on('history', () => {
      for (let index = 0; index < bufferSize; index++) {
        const msgNo = (messageIndex + index) % bufferSize;
        const msg = messageBuffer[msgNo];
        if (msg) {
          socket.emit('msg', msg);
        }
      }
    });

    socket.on('msg', (data) => {
      data.id = messageIndex;
      messageBuffer[messageIndex % bufferSize] = data;
      messageIndex++;
      io.emit('msg', data);
    });
  });
  io.listen(runnable);*/
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
