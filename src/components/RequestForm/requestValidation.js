import memoize from 'lru-memoize';
import {createValidator, required, maxLength, email} from 'utils/validation';

const surveyValidation = createValidator({
  title: [required, maxLength(10)],
  category: [required, , maxLength(10)],
  notes: maxLength(2000) // single rules don't have to be in an array
});
export default memoize(10)(surveyValidation);
