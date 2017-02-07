import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const getStatus = (step) => {
  switch (step) {
    case 1:
      return '申请任务';

    case 2:
      return '做任务';

    case 3:
      return '商家发货';

    case 4:
      return '签收好评';

    case 5:
      return '佣金提现';

    default:
      return '申请任务';
  }
};

const ActionButton = ({ step, nextStep }) => {
  return (
    <div className="action-button">
      当前状态：{step}-{getStatus(step)}
      {step > 1 && <Button onClick={nextStep}>完成</Button>}
    </div>
  );
};

ActionButton.propTypes = {
  step: PropTypes.number,
  nextStep: PropTypes.func
};

export default ActionButton;
