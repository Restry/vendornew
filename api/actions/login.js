import { User } from './dbSchema';
const jwt = require('jsonwebtoken');
import utils from '../utils/pwd';
import moment from 'moment';

export default function login(req, params, app, res) {
  // add back the password field for this query
  const query = User.findOne({
    email: req.body.email
  }).select('_id email +password name myBills');

  return new Promise((resolve, reject) => {
    query.exec((err, user) => {
      if (err) reject(err);

      if (!user) {
        reject({
          success: false,
          msg: 'No user with that email'
        });
      } else if (user) {
        // check password
        utils.compare(req.body.password, user.password).then((isMatch) => {
          if (!isMatch) {
            reject({ success: false, msg: 'Wrong password' });
          } else {
            user.password = undefined;
            // create token

            const token = jwt.sign(user, app.get('superSecret'), {
              expiresIn: 60000      // 修复 error with new express
            });

            // console.log('create token end');
            const userIdentity = {
              success: true,
              msg: 'Successfully authenticated!',
              token: token,
              user: user
            };
            res.setHeader('Set-Cookie', [`user=${token}; Path=/; Expires=${moment().add(100, 'days').format()}; HttpOnly`]);
            // console.log('set session start');
            // req.session.user = userIdentity.user;
            // console.log('set session end');
            // send token
            resolve(userIdentity);
          }
        });
      }
    });
  });
}

