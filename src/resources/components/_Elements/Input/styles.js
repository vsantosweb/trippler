import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1em;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  font-weight: 500;
  margin-bottom: 0;
  text-align: left;
  flex: 0 0 25%;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;
export const Helper = styled.small`
  margin-left: 10px;
`;
export const Input = styled.input`
  padding: 0.8em 0;
  outline: none;
  width: 100%;
  border-bottom: solid 1px #ddd;
  /* background-color: #f1f1f1; */
  /* border-radius: ${({ theme }) => theme.defaultRadius}; */
  &:read-only{
    background-color: #f1f1f1;
  }
`;

export const InputControl = styled.div`
  align-items: center;
  gap: 10px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: -30px;
  cursor: pointer;
`;
export const InputContent = styled.div`
  display: flex;
`;
