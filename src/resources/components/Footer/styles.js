import styled from "styled-components";

export const Footer = styled.footer`
    padding: ${({ theme }) => theme.defaultContainer.spacing};
    max-width: 100%;
    width: ${({ theme }) => theme.defaultContainer.width};
  margin: auto;
    background-color: #fff;
`;
export const FooterListContainer = styled.footer`
    padding: ${({ theme }) => theme.defaultContainer.spacing};
`;

export const CopyRight = styled.footer`
  font-size: 12px;
  padding: 1em ;
`;

export const FooterList = styled.ul`
  padding: 0;
  margin: 0;
  display: inline-block;
`;

export const FooterListTitle = styled.span`
  font-size: 12px;
  display: block;
  color: #909090;
  margin-bottom: .7em;

`;

export const FooterListItem = styled.li`
  margin-right: 0.3em;
  border: solid 1px #ddd;
  background-color: #fff;
  img {
    width: 45px;
    height: auto;
  }
`;
