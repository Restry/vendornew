import auth from '../utils/auth';

export default function loadAuth(req, pars, app) {
  return auth(req,app).then((result)=>{
    if(result){
      return result._doc;
    }
    return null;
  })
}
