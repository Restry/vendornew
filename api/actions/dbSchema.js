var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// email, pwd are required
// email must be unique
// don't send password with requests
let userSchema = new Schema({
  'email': { type: String, required: true, unique: true },
  'password': { type: String, required: true, select: false },
  'admin': Boolean,
  'prefix': String,
  'acceptCount': Number,
  'needsCount': Number,
  'name': String,
  'residence': Array,
  'phone': String,
  'captcha': String,
  'agreement': Boolean
});

let requestSchema = new Schema({
  'title': { type: String, required: true },
  'category': { type: String, required: true },
  'notes': { type: String, required: true },
  'process': Number,
  'states': { type: String, required: true },
  'vendor': String,
  'order': Number,
  'creator': String,
  'created': { type: Date, required: true },
  'modifed': Date,
  'completeTime': Date,
  'acceptTime ': Date
});

let User = mongoose.model('User', userSchema);
let Request = mongoose.model('Request', requestSchema);

export default {User, Request};
