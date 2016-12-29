import memoize from 'lru-memoize';
import {createValidator, required, maxLength, email} from 'utils/validation';

const surveyValidation = createValidator({
  name: [required, maxLength(10)],
  password: [required, maxLength(20)],
  cpassword: [required, maxLength(20)],
  safeCode: [required, maxLength(20)],
  csafeCode: [required, maxLength(20)],
  email: [required, email]// single rules don't have to be in an array
});
export default memoize(10)(surveyValidation);
