
import styled from "styled-components";

const getColors = ({ theme, variant, outlined }) => `

background: ${outlined ? 'none' : theme.colors[variant]};
border-color: ${theme.colors[variant]} !important;
color: ${outlined ? theme.colors[variant] : '#fff'};
`;

const getSize = ({ theme, size }) => `
  font-size: 14px;
`
export const Container = styled.button`
  font-weight: 700;
  border-radius: ${({ theme }) => `calc(${ theme.radiusDefault } * 1)`};
  white-space: nowrap;
  width: ${({ block }) => block && '100%'};
  ${getColors};
  ${getSize};
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  &:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
  display: inline;
  padding:  .6em;
  border: solid 1px;
`;

