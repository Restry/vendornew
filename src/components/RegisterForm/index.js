import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import surveyValidation from './surveyValidation';
import * as registerActions from 'redux/modules/auth';

function asyncValidate(data, dispatch, {isValidEmail}) {
  if (!data.email) {
    return Promise.resolve({});
  }
  return Promise.resolve({});
  return isValidEmail(data);
}
@connect(() => ({}),
  dispatch => bindActionCreators(registerActions, dispatch)
)
@reduxForm({
  form: 'survey',
  fields: ['name', 'email', 'phone', 'password', 'cpassword', 'safeCode', 'csafeCode'],
  validate: surveyValidation,
  asyncValidate,
  asyncBlurFields: ['email']
})
export default
  class RegisterForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      asyncValidating,
      dirty,
      fields: {name, password, cpassword, email, phone, safeCode, csafeCode},
      active,
      handleSubmit,
      invalid,
      resetForm,
      pristine,
      valid
    } = this.props;

    const renderInput = (field, label, showAsyncValidating, type = 'text') =>
      <div className={'normalInput' + (field.error && field.touched ? ' has-error' : '')}>
        <span className="tit-reg">{label}</span>
        {showAsyncValidating && asyncValidating && <i className={'fa fa-cog fa-spin '} />}
        <input type={type} className="phone ipt" id={field.name} {...field} />
        {field.error && field.touched && <span className="error error1">{field.error}</span>}
        <div className="clearfix"></div>
      </div>;


    return (
      <form className="mainForm" onSubmit={handleSubmit}>
        {renderInput(name, '姓名')}
        {renderInput(email, '邮箱', true)}
        {renderInput(password, '密码', false, 'password')}
        {renderInput(cpassword, '确认密码', false, 'password')}
        {renderInput(safeCode, '安全码', false, 'password')}
        {renderInput(csafeCode, '确认安全码', false, 'password')}
        {renderInput(phone, '联系电话')}

        <div className="rememberField"> <span className="check_chk fl"> <i className="sec"></i></span>
          <label className="pointer fl">我已阅读并接受</label>
          <a href="#" target="_blank" className="linkABlue">《服务协议条款》</a> </div>

        <div className="rememberField"> <a onClick={handleSubmit} className="fullBtnBlue">注册</a> </div>
      </form>
    );
  }
}
