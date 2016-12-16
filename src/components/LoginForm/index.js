import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as authActions from 'redux/modules/auth';
import { Link } from 'react-router';

@connect(state => ({ user: state.auth.user }), authActions)
export default class Login extends Component {
    static propTypes = {
        user: PropTypes.object,
        login: PropTypes.func,
        logout: PropTypes.func
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const postIdentity = {
            email:this.refs.username.value,
            password : this.refs.password.value
        }
        this.props.login(postIdentity);
        
    }
    componentDidMount() {
        this.refs.username && (this.refs.username.value = 'q@q.com');
    }

    render() {
        const {user} = this.props;
        if (!user) {
            return (<div className="indLogin">
                <div className="error-ts die" id="err_tip"><i className="error"></i><span>请输入账号和密码</span> </div>
                <div className="top-txt">
                    <div className="sec-n"> <a id="alink_0" className="on">会员登录</a></div>
                </div>
                <div className="tab">
                    <div className="login-item">
                        <div className="login-l fl"><i className="lg-user"></i></div>
                        <input type="text" ref="username" className="user-ipt fl" />

                        <div className="clearfix"></div>
                    </div>
                    <div className="login-item">
                        <div className="login-l fl"><i className="lg-psw"></i></div>
                        <input type="password" ref="password" className="user-ipt keyboard fl" />
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="tab"><a id="btnSubmit" onClick={this.handleSubmit} className="lg-btn">马上登陆</a></div>
                <div className="tab">
                    <div className="fl pwsd-opt"> <Link to="register">免费注册</Link> </div>
                    <div className="fr pwsd-opt"><Link to="register">忘记密码？</Link> </div>
                    <div className="clearfix"></div>
                </div>
                <div className="tab">
                    <div className="other-log"> <a href="##" className="qq">QQ登陆</a> <a href="##" className="weixin">微信登陆</a> <a href="##" className="weixin">微信登陆</a></div>
                </div>
            </div>);
        }
        if (user) {
            return <span></span>;
        }
    }
}
