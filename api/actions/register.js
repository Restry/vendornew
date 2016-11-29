import { User } from './dbSchema';
let jwt = require('jsonwebtoken');
import utils from 'utils/pwd.js';


export default function register(req, params,app) {
  console.log(`Register:${JSON.stringify(req.body)}`)

  return new Promise((resolve, reject) => {

    utils.hashPwd(req.body.password).then(function (hashedPwd) {
        var newUser = new User({
          email: req.body.email,
          password: hashedPwd,
          admin: false,
          name: req.body.name,
          residence: req.body.residence,
          phone: req.body.phone,
          captcha: req.body.captcha,
          agreement: req.body.agreement
        });

        newUser.save(function (err) {
          if (err) reject(err);

          // create token
          var token = jwt.sign(newUser, app.get('superSecret'), {
            expiresInminutes: 1440
          });

          newUser.password = undefined;
          // send token
          resolve({
            success: true,
            message: 'Successfully authenticated!',
            token: token,
            user: newUser
          });

          req.session.user = newUser;
        });
      });

  });

}
