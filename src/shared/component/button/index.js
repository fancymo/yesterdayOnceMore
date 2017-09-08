import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './index.less';

const prefix = 'y_';
const btnCls = `${prefix}btn`;
const btnPrimary = `${btnCls}_primary`;

class Button extends Component {
  // constructor() {
  //
  // }

  render() {
    const { type, className, children } = this.props;
    const cls = classNames(btnCls, className, {
      [`${btnCls}_${type}`]: type,
    })
    return (
      <button className={cls}><span>{children}</span></button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary'])
};
Button.defaultProps = {
  type: 'primary'
};

export default Button;
