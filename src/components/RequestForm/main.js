import React, { PropTypes } from 'react';
import Step from './step';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import config from '../../config';
import { CusMap } from 'components';

export class RequestForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      request: Object.assign({}, props.request),
      errors: {},
      saving: false
    };

    this.updateRequestState = this.updateRequestState.bind(this);
    this.saveRequest = this.saveRequest.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.request.id != nextProps.request.id) {
      // Necessary to populate form when existing request is loaded directly.
      this.setState({ request: Object.assign({}, nextProps.request) });
    }
  }

  updateRequestState(event) {
    const field = event.target.name;
    let request = this.state.request;
    request[field] = event.target.value;
    return this.setState({ request });
  }

  updateSubState = (obj, col) => {
    return (event) => {
      const field = event.target.name;
      const request = this.state.request;

      obj[field] = event.target.value;
      request[col] = obj;
      return this.setState({ request });
    };
  }

  requestFormIsValid() {
    let formIsValid = true;
    const errors = {};
    const { title, category, points} = this.state.request;

    if (title.length < 5) {
      errors.title = '说明太少了，多点说吧！';
      formIsValid = false;
    }
    if (!category) {
      errors.category = '先选一个类别，淘宝还是？';
      formIsValid = false;
    }
    if (!points) {
      errors.points = '做一次给人家多少钱？？？';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }


  saveRequest(event) {
    event.preventDefault();

    if (!this.requestFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.onSubmit(this.state.request);
    return;
    this.props.actions.saveRequest(this.state.request)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Request saved');
    this.context.router.push('/requests');
  }

  render() {
    const { request, errors, saving} = this.state;

    return (
      <div>
        <CusMap title="开始放单" description="提交自己的需求，确保安全真实有效！"/>
        <div className="clearfix"></div>
        <form onSubmit={this.saveRequest} className="request-form form-horizontal">
          <div className="bs-callout bs-callout-info">
            第1步：单子信息
        </div>

          <TextInput
            name="title"
            label="标题"
            value={request.title}
            onChange={this.updateRequestState}
            error={errors.title} />


          <SelectInput
            name="category"
            label="类别"
            value={request.category}
            defaultOption="请选择"
            options={config.categories}
            onChange={this.updateRequestState} error={errors.category} />

          <TextInput
            name="points"
            label="点数"
            value={request.points}
            onChange={this.updateRequestState}
            error={errors.points} />

          <Step
            onChange={this.updateSubState(request.billInfo || {}, 'billInfo')}
            field="billInfo"
            item={request.billInfo || {}}
            errors={errors.billInfo || {}}
            />

          <div className="bs-callout bs-callout-info">第2步：搜索方式</div>
          <Step
            onChange={this.updateSubState(request.searchWay || {}, 'searchWay')}
            field="searchWay"
            item={request.searchWay || {}}
            errors={errors.billInfo || {}}
            />


          <div className="bs-callout bs-callout-info">第3步：拍下方式</div>
          <Step
            onChange={this.updateSubState(request.buyWay || {}, 'buyWay')}
            field="buyWay"
            item={request.buyWay || {}}
            errors={errors.billInfo || {}}
            />
          <div className="bs-callout bs-callout-info">第4步：好评方式</div>
          <Step
            onChange={this.updateSubState(request.favorableWay || {}, 'favorableWay')}
            field="favorableWay"
            item={request.favorableWay || {}}
            errors={errors.billInfo || {}}
            />


          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">提交</button>
            </div>
          </div>

        </form>

      </div>
    );
  }
}

RequestForm.contextTypes = {
  router: PropTypes.object
};


export default RequestForm;
