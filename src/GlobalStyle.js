import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
   
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  main{
    background: #f4f4f4;
  }
  html, body, #__next{
    color: #0f294d;
    height: 100%;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    /* font-size: 14px; */
  }


  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
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
 
  section{
    max-width: ${({ theme }) => theme.defaultContainer.width};
    padding: 0 ${({ theme }) => theme.defaultContainer.spacing};
    margin:auto;
    @media (max-width:720px){ padding: 0 1em}
  }
  a{ 
    text-decoration: none !important;
  }
  .slide-nav {
    width: 30px;
    height: 30px;
    background-color: red;
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

select{
  padding: 1em;
  width: 100%;
}
input {
  width: 100%;
  border: none;

}

.google-button{
  width: 100%;
  box-shadow: none !important;
  border: solid 1px #eee !important;
  border-radius: ${({ theme }) => theme.radiusDefault} !important ;
}
`;

export default GlobalStyle;
