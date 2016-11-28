import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import * as authActions from 'redux/modules/auth';
import { bindActionCreators } from 'redux';
import { Link, IndexLink, browserHistory } from 'react-router';



@connect(
    state => ({ user: state.auth.user }),
    authActions)
class Register extends Component {

    static propTypes = {
        user: PropTypes.object
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            passwordDirty: false
        }
        this.checkConfirm = this.checkConfirm.bind(this);
        this.checkPassowrd = this.checkPassowrd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordBlur = this.handlePasswordBlur.bind(this);

    }


    componentDidMount() {
        this.props.form.setFieldsValue({
            email: '123@qq.com'
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }

            this.props.actions.registration(values).then((res) => {
                browserHistory.push('/');

            });

            console.log('Received values of form: ', values);
        });
    }
    handlePasswordBlur(e) {
        const value = e.target.value;
        this.setState({ passwordDirty: this.state.passwordDirty || !!value });
    }
    checkPassowrd(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.passwordDirty) {
            form.validateFields(['confirm'], { force: true });
        }

        callback();
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86'
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
                <Option value="80">+80</Option>
            </Select>
            );

        return (
            <div>
                <div className="head">
                    <div className="main">
                        <div className="fr tel">服务热线：400-710-8886</div>
                        <div className="logo reg"><a href="#"><img src={require('assets/images/logo-indx.png')} width="107" height="60" /></a><span>易工场设计师注册</span></div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="regWrap">
                    <div className="regSteps">
                        <div className="regSteps-list">
                            <ul>
                                <li className="on"><span className="on">设置账号</span><i className="done">1</i></li>
                                <li className=""><span>完善信息</span><i className="active">2</i></li>
                                <li className="last"><span>注册完成</span><i className="undone">3</i></li>
                            </ul>
                            <div className="clear"></div>
                        </div>
                        <div className="regSteps-line">
                            <div className="line-sec"></div>
                        </div>
                    </div>
                    <div className="normalline">
                        <div id="container" className="cls-container">

                            <div id="bg-overlay" className="bg-img bg-img-1"></div>

                            <div className="cls-content">
                                <div className="cls-content-lg panel">
                                    <div className="panel-body">
                                        <div className="mar-ver pad-btm">
                                            <h3 className="h4 mar-no">用户注册</h3>
                                            <p className="text-muted">输入用户信息</p>
                                        </div>


                                        <Form horizontal onSubmit={this.handleSubmit}>
                                            <FormItem
                                                {...formItemLayout}
                                                label="邮箱"
                                                hasFeedback
                                                >
                                                {getFieldDecorator('email', {
                                                    rules: [{
                                                        type: 'email', message: 'The input is not valid E-mail!'
                                                    }, {
                                                        required: true, message: 'Please input your E-mail!'
                                                    }]
                                                })(
                                                    <Input />
                                                    )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="密码"
                                                hasFeedback
                                                >
                                                {getFieldDecorator('password', {
                                                    rules: [{
                                                        required: true, message: 'Please input your password!'
                                                    }, {
                                                        validator: this.checkConfirm
                                                    }]
                                                })(
                                                    <Input type="password" onBlur={this.handlePasswordBlur} />
                                                    )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="确认密码"
                                                hasFeedback
                                                >
                                                {getFieldDecorator('confirm', {
                                                    rules: [{
                                                        required: true, message: 'Please confirm your password!'
                                                    }, {
                                                        validator: this.checkPassowrd
                                                    }]
                                                })(
                                                    <Input type="password" />
                                                    )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label={(
                                                    <span>
                                                        昵称&nbsp;
              <Tooltip title="What do you want other to call you?">
                                                            <Icon type="question-circle-o" />
                                                        </Tooltip>
                                                    </span>
                                                )}
                                                hasFeedback
                                                >
                                                {getFieldDecorator('nickname', {
                                                    rules: [{ required: true, message: 'Please input your nickname!' }]
                                                })(
                                                    <Input />
                                                    )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="所在地"
                                                >
                                                {getFieldDecorator('residence', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
                                                })(
                                                    <Cascader options={residences} />
                                                    )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="联系方式"
                                                >
                                                {getFieldDecorator('phone', {
                                                    rules: [{ required: true, message: 'Please input your phone number!' }]
                                                })(
                                                    <Input addonBefore={prefixSelector} />
                                                    )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="手机验证"
                                                >
                                                <Row gutter={8}>
                                                    <Col span={12}>
                                                        {getFieldDecorator('captcha', {
                                                            rules: [{ required: true, message: 'Please input the captcha you got!' }]
                                                        })(
                                                            <Input size="large" />
                                                            )}
                                                    </Col>
                                                    <Col span={12}>
                                                        <Button size="large">Get captcha</Button>
                                                    </Col>
                                                </Row>
                                            </FormItem>
                                            <FormItem>
                                                <Row>
                                                    <Col span={14} offset={6}>
                                                        <p>
                                                            {getFieldDecorator('agreement', {
                                                                valuePropName: 'checked'
                                                            })(
                                                                <Checkbox>我同意此 <a>协议</a></Checkbox>
                                                                )}
                                                        </p>
                                                        <Button type="primary" htmlType="submit" size="large">注册</Button>
                                                    </Col>
                                                </Row>
                                            </FormItem>
                                        </Form>
                                    </div>

                                    <div className="pad-all">
                                        <div className="media pad-top bord-top">
                                            <div className="pull-right">
                                                <a href="#" className="pad-rgt"><i className="gsp-psi-facebook icon-lg text-primary"></i></a>
                                                <a href="#" className="pad-rgt"><i className="gsp-psi-twitter icon-lg text-info"></i></a>
                                                <a href="#" className="pad-rgt"><i className="gsp-psi-google-plus icon-lg text-danger"></i></a>
                                            </div>
                                            <div className="media-body text-left">
                                                Login with
                      </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form id="#mainForm1" className="mainForm mainForm1">

                        <div className="rememberField"> <span className="check_chk fl"> <i className="sec"></i></span>
                            <label className="pointer fl">我已阅读并接受</label>
                            <a href="#" target="_blank" className="linkABlue">《EGC服务协议条款》</a> </div>
                        <div className="rememberField"> <a href="#" className="fullBtnBlue">注册</a> </div>
                    </form>
                </div>

                <div className="foot">
                    <div className="main">
                        <p>关于我们 | 联系我们 | 人才招聘 | 商家入驻 | 广告服务 | 手机EGC | 友情链接</p>
                        <p>ICP认证：苏B1-20140039 备案号：苏CIP备14031554号-4违法和不良信息举报电话：400-710-8886 Copyright © 2004-2015 易工场 EGC.CN 版权所有</p>
                        <p><a href="#"><img src={require('assets/images/1.gif')} /></a><a href="#"><img src={require('assets/images/2.png')} /></a></p>
                    </div>
                </div>
            </div>
        );
    }
}


const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake'
        }]
    }]
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
        }]
    }]
}];

export default Form.create()(Register);

