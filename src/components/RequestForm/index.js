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


          <div className="sm_zw1">
            <div className="bu_biaoti">
              <span>第1步：单子信息</span>
            </div>
            <table className="bu_tab" border="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td className="n1_td1">单子类型:</td>
                  <td>
                    远程托管单<span>（由平台管理人员远程付款）</span>									</td>
                </tr>
                <tr>
                  <td className="n1_td1">刷单方式:</td>
                  <td>
                    全程电脑刷单									</td>
                </tr>
                <tr>
                  <td className="n1_td1">二次任务间隔:</td>
                  <td>做过这个店铺的单子的，10天以内不可以重复做！</td>
                </tr>
                <tr>
                  <td className="n1_td1">地区要求:</td>
                  <td>
                    不限制									</td>
                </tr>
                <tr>
                  <td className="n1_td1">小号要求:</td>
                  <td>
                    买家累积信用1心以上，一星期内交易量不超过7笔，一个月内交易量不超过15笔。									</td>
                </tr>
                <tr>
                  <td className="n1_td1">浏览要求:</td>
                  <td>
                    做单过程需要全程截图。货比三家后再进店，货比时每家店铺浏览3分钟以上。货比三家完成后，需要浏览店铺宝贝2-5款。									</td>
                </tr>
                <tr>
                  <td className="n1_td1">收货要求:</td>
                  <td>
                    成功拍下宝贝后即可收货。收到货后2天后再好评！好评内容自由发挥即可！									</td>
                </tr>
              </tbody>
            </table>
            <div className="bu_biaoti">
              <span>第2步：搜索方式</span>
            </div>
            <table className="bu_tab" border="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td className="n1_td1 anniu">搜索方式:</td>
                  <td className="anniu">使用淘宝搜索</td>
                </tr>
                <tr>
                  <td className="n1_td1 anniu" >搜索关键词:</td>
                  <td>
                    <span >[ {item.productKeywords} ]</span>									</td>
                </tr>
                <tr>
                  <td className="n1_td1 anniu">筛选方式:</td>
                  <td className="anniu">
                    自然搜索，禁止筛选。									</td>
                </tr>
                <tr>
                  <td className="n1_td1 anniu">店铺旺旺:</td>
                  <td>
                    <span >[ 已经有人在做任务了 ]</span>									</td>
                </tr>
                <tr>
                  <td className="n1_td1 anniu" >主宝贝价格:</td>
                  <td>
                    <span >[ {item.productPrice} ]</span>									</td>
                </tr>
                <tr>
                  <td className="n1_td1 anniu">搜索结果图:</td>
                  <td className="anniu">
                    <span >[ 已经有人在做任务了 ]</span>									</td>
                </tr>
              </tbody>
            </table>
            <div className="bu_biaoti">
              <span>第3步：拍下方式</span>
            </div>
            <table className="bu_tab" border="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td className="n1_td1">浏览要求:</td>
                  <td>
                    做单过程需要全程截图。货比三家后再进店，货比时每家店铺浏览3分钟以上。货比三家完成后，需要浏览店铺宝贝2-5款。									</td>
                </tr>
                <tr>
                  <td className="n1_td1">假聊要求:</td>
                  <td>
                    浏览完后需要进行假聊。<br />假聊内容：
                    <div className="chatcontent">
                      {item.chatContent}
                    </div>
                    评价根据要求评。（注意：账号都是假的没必要真的去验证）
                    </td>
                </tr>
                <tr>
                  <td className="n1_td1">拍宝贝数量:</td>
                  <td>
                    只拍一个宝贝									</td>
                </tr>
              </tbody>
            </table>
            <div className="bu_biaoti">
              <span>第4步：好评方式</span>
            </div>
            <table className="bu_tab" border="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td className="n1_td1">收货时间:</td>
                  <td>
                    成功拍下宝贝后即可收货。									</td>
                </tr>
                <tr>
                  <td className="n1_td1">好评方式:</td>
                  <td>
                    自由发挥									</td>
                </tr>
                <tr>
                  <td className="n1_td1">追评晒图:</td>
                  <td>
                    自由发挥									</td>
                </tr>
              </tbody>
            </table>
          </div>



      </form>
    );
  }
}
