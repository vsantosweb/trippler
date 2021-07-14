import styled from "styled-components";

export const Container = styled.input`
  border-radius: ${({ theme }) => theme.radiusDefault};
  display: inline;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  border: solid 1px #eee;
  &:focus{
    border:none;
    outline:none;
  }
`;
