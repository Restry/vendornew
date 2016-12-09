var mongoose = require('mongoose')
  , connectionString = 'mongodb://42.121.119.36:27017/vendor-db'
  , options = {};

import colors from 'colors';

options = {
  server: {
    auto_reconnect: true,
    poolSize: 10
  }
};

mongoose.connect(connectionString, options, (err, res) => {
  if (err) {
    console.log(`[mongoose log] Error connecting to:  ${connectionString} . ${err}`.red);
  } else {
    console.log(`[mongoose log] Successfully connected to: ${connectionString}`.green);
  }
});

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function callback() {
  // yay!
  console.log('mongoose open success'.green);
});
