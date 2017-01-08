import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import * as map from './fieldMap';

const CourseForm = ({item, field, onChange, errors}) => {
  let fields = [];

  for (const col in item) {
    fields.push(<TextInput
      name={col}
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

CourseForm.propTypes = {
  item: React.PropTypes.object.isRequired,
  field: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default CourseForm;
