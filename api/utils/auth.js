const jwt = require('jsonwebtoken');

export default function authenticate(req, app) {
  // const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.user;
  const token = req.cookies.user;

  return new Promise((resolve, reject) => {
    req.decodeToken = {};
    if (token) {
      // console.log(token);
      // verify token validity
      jwt.verify(token, app.get('superSecret'), (err, decoded) => {
        if (err) {
          resolve({
            success: false,
            message: 'Failed to authenticate token.',
            error: err
          });
          console.log(JSON.stringify(err));
        } else {
          // console.log('decode user:', decoded);
          req.decodeToken = decoded;
          resolve(decoded);
        }
      });
    } else {
      resolve(null);
    }
  });
}
