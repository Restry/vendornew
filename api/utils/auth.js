const jwt = require('jsonwebtoken');

export default function authenticate(req, app) {
  // const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.user;
  const token = req.cookies.user;

  return new Promise((resolve, reject) => {
    req.decodeToken = {};
    if (token) {
      console.log(token);
      // verify token validity
      jwt.verify(token, app.get('superSecret'), (err, decoded) => {
        if (err) {
          reject({
            success: false,
            message: 'Failed to authenticate token.'
          });
        } else {
          req.decodeToken = decoded;
          resolve(decoded);
        }
      });
    } else {
      resolve(null);
    }
  });
}
