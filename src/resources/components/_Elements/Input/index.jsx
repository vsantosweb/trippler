import React from 'react';

import * as Styled from './styles';

const Input = React.forwardRef(({ helper, label, inLine, ...rest }, ref) => (
  <Styled.Container>
    <Styled.InputControl>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input ref={ref} {...rest} />
      <small>{helper}</small>
    </Styled.InputControl>
  </Styled.Container>
))
export default Input;
