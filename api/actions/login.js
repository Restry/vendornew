import { User } from './dbSchema';
const jwt = require('jsonwebtoken');
import utils from '../utils/pwd';

export default function login(req, params, app) {
  // add back the password field for this query
  const query = User.findOne({
    email: req.body.email
  }).select('_id email +password name');

  return new Promise((resolve, reject) => {
    query.exec((err, user) => {
      if (err) reject(err);

      if (!user) {
        reject({
          success: false,
          message: 'No user with that email'
        });
      } else if (user) {
        // check password
        utils.compare(req.body.password, user.password).then((isMatch) => {
          if (!isMatch) {
            reject({ success: false, message: 'Wrong password' });
          } else {
            user.password = undefined;
            // create token

            const token = jwt.sign(user, app.get('superSecret'), {
              expiresIn: 60000      // 修复 error with new express
            });

            console.log('create token end');
            const userIdentity = {
              success: true,
              message: 'Successfully authenticated!',
              token: token,
              user: user
            };
            console.log('set session start');
            req.session.user = userIdentity.user;
            console.log('set session end');
            // send token
            resolve(userIdentity);
          }
        });
      }
    });
  });
}


// middleware
function authenticate(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  console.log(req.headers);
  if (token) {

    // verify token validity
    jwt.verify(token, app.get('superSecret'), function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {

    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
}