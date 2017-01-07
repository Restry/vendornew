import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import requestValidation from './requestValidation';
import config from '../../config';

@reduxForm({
  form: 'request',
  fields: [
    'title',
    'category',
    'price',
    'qq',
    'points', // 点数
    'claims', // 要求
    'productPrice', // 商品价格
    'productKeywords',
    'wangwang',
    'chatContent',
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
        price,
        qq,
        points,
        claims,
        productPrice,
        productKeywords,
        wangwang,
        chatContent,
        notes},
      active,
      handleSubmit,
      invalid,
      resetForm,
      pristine,
      valid
    } = this.props;
    const renderInput = (field, label, showAsyncValidating, type = 'text', value = '') =>
      <div className={'normalInput' + (field.error && field.touched ? ' has-error' : '')}>
        <span className="tit-reg">{label}</span>
        {showAsyncValidating && <i className={'fa fa-cog fa-spin '} />}
        {type !== 'textarea' && <input type={type} className="phone ipt" id={field.name} {...field} />}
        {type === 'textarea' && <textarea className="phone ipt" id={field.name} {...field}>{value}</textarea>}
        {field.error && field.touched && <span className="error error1">{field.error}</span>}
        <div className="clearfix"></div>
      </div>;

    return (
      <form className="mainForm" onSubmit={handleSubmit}>
        {renderInput(title, '标题')}

        <div className="normalInput">
          <span className="tit-reg">类别</span>
          {config.categories.map((item, index) => {
            return (<span key={index}> <input type="radio" id={item.class} {...category} value={item.class}
              checked={category.value === item.class} />
              <label htmlFor={item.class}>{item.title}</label>
            </span>);
          })}
        </div>

        {renderInput(notes, '描述', false, 'textarea')}
        {renderInput(price, '托管金额')}
        {renderInput(qq, 'QQ')}
        {renderInput(wangwang, '旺旺')}
        {renderInput(points, '点数')}
        {renderInput(claims, '要求')}
        {renderInput(productPrice, '宝贝价格')}
        {renderInput(productKeywords, '宝贝关键字')}
        {renderInput(chatContent, '假聊内容', false, 'textarea', '当成是自己在拍')}


        <div className="rememberField">
          <span className="check_chk fl">
            <i className="sec"></i></span>
          <label className="pointer fl">我已阅读并接受</label>
          <a href="#" target="_blank" className="linkABlue">《服务协议条款》</a> </div>

        <div className="rememberField">
          <a onClick={handleSubmit}
            className="fullBtnBlue">注册</a>
        </div>
      </form>
    );
  }
}
