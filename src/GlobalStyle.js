import { createGlobalStyle } from "styled-components";
import "./resources/fonts/line-awesome-1.3.0/1.3.0/css/line-awesome.min.css";

const GlobalStyle = createGlobalStyle`

  html, body, #root{ height: 100%; box-sizing:border-box }
  body {
    margin: 0;
    padding: 0;
    font-family: system, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  }
  section{
    max-width: ${({ theme }) => theme.defaultContainer.width};
    padding: 0 ${({ theme }) => theme.defaultContainer.spacing};
    margin:auto;
    @media (max-width:720px){ padding: 0 1em}
  }
  a{ 
    text-decoration: none !important;
  }
  .slideNav {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: none;
    border: solid 1px;
    outline: none;
    box-shadow: none;
    margin-bottom: .5em;
    margin-right: .4em;
    &:focus {
        outline: none;
    }
}

select,
input {
  transition: .2s ease-in-out;
  width: 100%;
  padding: 15px;
  margin: 5px 0 12px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  border-radius: 20px;
    border-radius: ${({theme}) => theme.radiusDefault}
}
`;

export default GlobalStyle;
