import React from 'react';
import * as Inpt from './styles';
import PropTypes from 'prop-types';

export const Input = ({ children, ...rest }) => (
  <Inpt.Container {...rest}>{children}</Inpt.Container>
)
Input.propTypes = {
	color: PropTypes.oneOf(['secondary', 'primary']),
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(['size']),
	outlined: PropTypes.bool,
	children: PropTypes.node.isRequired,
	
};

Input.defaultProps = {
	color: 'secondary',
};
