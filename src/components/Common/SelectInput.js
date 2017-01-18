import React, { PropTypes } from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label" htmlFor={name}>{label}</label>
      <div className="col-sm-10">
        <div className="field">
          {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="form-control">
            <option value="">{defaultOption}</option>
            {options.map((option) => {
              return <option key={option.value + 'Name'} value={option.value}>{option.text}</option>;
            })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};
SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
