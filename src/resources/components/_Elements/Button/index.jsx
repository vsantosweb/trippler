import React from 'react';
import * as Btn from './styles';
import PropTypes from 'prop-types';

export const Button = ({ children, ...rest }) => (
  <Btn.Container {...rest}>{children}</Btn.Container>
)
Button.propTypes = {
	color: PropTypes.oneOf(['secondary', 'primary']),
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(['size']),
	outlined: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	color: 'secondary',
};
