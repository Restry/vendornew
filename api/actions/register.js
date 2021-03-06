import { User } from './dbSchema';
const jwt = require('jsonwebtoken');
import utils from '../utils/pwd';

export default function register(req, params, app) {
  // console.log(`Register:${JSON.stringify(req.body)}`);
  return new Promise((resolve, reject) => {
    utils.hash(req.body.password).then((hashedPwd) => {
      const newUser = new User({
        email: req.body.email,
        password: hashedPwd,
        admin: false,
        name: req.body.name,
        safeCode: req.body.safeCode,
        phone: req.body.phone,
        captcha: req.body.captcha,
        agreement: req.body.agreement,
        myBills: []
      });

      newUser.save(function (err) {
        if (err) {
          reject({
            success: false,
            message: '添加用户失败，用户邮箱重复。',
            token: null,
            user: null
          });
        }
        // create token
        const token = jwt.sign(newUser, app.get('superSecret'), {
          expiresIn: 1440
        });

        newUser.password = undefined;
        // send token
        resolve({
          success: true,
          message: 'Successfully authenticated!',
          token: token,
          user: newUser
        });

        // req.session.user = newUser;
      });
    });
  });
}
