import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import requestValidation from './requestValidation';
import config from '../../config';

@reduxForm({
  form: 'request',
  fields: [
    'title',
    'category',
    'notes'],
  validate: requestValidation,
  // asyncValidate,
  // asyncBlurFields: ['email']
})
export default
  class RequestForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    //  asyncValidating: PropTypes.bool.isRequired,
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
      //  asyncValidating,
      dirty,
      fields: {
        title,
        category,
        notes},
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
        {showAsyncValidating && <i className={'fa fa-cog fa-spin '} />}
        <input type={type} className="phone ipt" id={field.name} {...field} />
        {field.error && field.touched && <span className="error error1">{field.error}</span>}
        <div className="clearfix"></div>
      </div>;

    return (
      <form className="mainForm" onSubmit={handleSubmit}>
        {renderInput(title, '标题')}

        <div className="normalInput">
          <span className="tit-reg">类别</span>
          {config.categories.map((item) => {
            return <span> <input type="radio" id={item.class} {...category} value={item.class}
              checked={category.value === item.class} />
              <label htmlFor={item.class}>{item.title}</label>
            </span>;
          })}

        </div>

        {renderInput(notes, '描述')}

        <div className="rememberField">
          <span className="check_chk fl">
            <i className="sec"></i></span>
          <label className="pointer fl">我已阅读并接受</label>
          <a href="#" target="_blank" className="linkABlue">《EGC服务协议条款》</a> </div>

        <div className="rememberField">
          <a onClick={handleSubmit}
            className="fullBtnBlue">注册</a>
        </div>
      </form>
    );
  }
}
