var crypto = require('crypto');

module.exports = {
  genSalt: function (SALT_WORK_FACTOR) {
    return callback(null, 'aaa');
  },
  hash: (pwd, salt) => {
    return new Promise((resolve) => {
      const md5 = crypto.createHash('md5');
      md5.update(pwd);
      resolve(md5.digest('hex'));
    });
  },
  compare: (pwd, cpwd) => {
    return new Promise((resolve) => {
      const md5 = crypto.createHash('md5');
      md5.update(pwd);
      const encodePwd = md5.digest('hex');
      // console.log(pwd + ':' + cpwd);
      // console.log(encodePwd + ':' + cpwd);
      resolve(cpwd === encodePwd);
    });
  }
};
