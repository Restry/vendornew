import React from 'react';
import TextInput from '../Common/TextInput.js';
import * as map from './fieldMap';

const StepForm = ({item, field, onChange, errors}) => {
  let fields = [];

  for (const col in item) {
    fields.push(<TextInput
      name={col}
      key={col}
      label={map[field][col]}
      value={item[col]}
      onChange={onChange}
      error={errors[col]} />);
  }

  return (
    <div>
      {fields}
    </div>
  );
};

StepForm.propTypes = {
  item: React.PropTypes.object.isRequired,
  field: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default StepForm;
