import styled from "styled-components";
import { Button } from "../../_Elements/Button";
import { Input } from "../../_Elements/Input";

export const SearchInput = styled(Input)``;

export const MediaQuerie = "@media (max-width: 786px)";
export const Container = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 16px;

`;
export const SearchBar = styled.label`
  border-radius: ${({ theme }) => theme.radiusDefault};
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
 

  i {
    font-size: 1.6em;
    margin-left: 10px;
  }
  ${SearchInput} {
    border-radius: 0;
    border: none;
    width: 100%;
  }
`;
export const SearchButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  ${MediaQuerie} {
    display: block;
    width: 100%;
  }
`;
