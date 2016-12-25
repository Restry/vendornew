const jwt = require('jsonwebtoken');

// middleware
export default function authenticate(req, app) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.user;

  return new Promise((resolve, reject)=>{
    if (token) {
      // verify token validity
      jwt.verify(token, app.get('superSecret'), (err, decoded)=> {
        if (err) {
          reject({
            success: false,
            message: 'Failed to authenticate token.'
          });
        } else {
          req.decodeUser = decoded;
          resolve(decoded);
        }
      });
    } else {
      reject(null);
    }
  });
}
