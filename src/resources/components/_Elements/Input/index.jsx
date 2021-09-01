import React from 'react';

import * as Styled from './styles';

const Input = React.forwardRef(({ helper, label, inLine, ...rest }, ref) => (
  <Styled.Container>
    <Styled.InputControl>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input ref={ref} {...rest} />
    </Styled.InputControl>
  </Styled.Container>
))
export default Input;
