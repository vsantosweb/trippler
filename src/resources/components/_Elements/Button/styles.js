import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: ${({ icon }) => icon ? 'space-between': 'center'};
  text-align: center;
  padding: ${({ type }) => type !== 'link' && '0.8em 1.8em'};
  border-radius: ${({ theme }) => theme.radiusDefault};
  outline: none;
  box-shadow: none;
  border: solid 2px ${({ theme, color }) => theme.colors[color]};
  font-weight: bold;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: #fff;
  width: ${({ block }) => block && '100%'};
  color: #fff;
  margin-bottom: .8em;
  &:disabled{
      opacity: .4 !important;
      cursor: no-drop;
  }
  &:hover{
      opacity: .9;
  }
  ${({ variant, theme, color }) => {
        if (variant === "outlined") {
            return (
                `background: transparent;
                color:  ${theme.colors[color]}};`
            );
        }
    }}
    a{
        text-decoration: none;
        display: block;
        padding: ${({ type }) => type === 'link' && '0.8em 1.8em'};

    }
`;
