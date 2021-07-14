import styled from "styled-components";
import { setSyntheticTrailingComments } from "typescript";

export const Container = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 400;
`;

export const Name = styled.h1``;
export const Description = styled.p``;
export const Info = styled.div``;

export const InfoDetails = styled.span`
  display: flex;
  flex-direction: column;
  align-items: ${({ justify }) => justify};
`;

export const InfoTop = styled.div``;
export const InfoPriceValue = styled.span``;

export const Vacancies = styled.div`
  color: #218242;
`;

export const Period = styled.div`
  font-weight: bold;
  color: #555;
`;
export const Details = styled.section`
  padding: 1em;

  ${Name} {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    display: inline;
  }

  ${Description} {
    color: #525252;
  }

  ${Info} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${InfoDetails} {
      ${InfoTop} {
        font-size: 11px;
      }
      ${InfoPriceValue} {
        font-weight: bold;
        font-size: 1.8em;
        margin-top: -6px;
      }
    }
  }
`;

export const PackageItem = styled.div`
  width: 100%;
  height: 100px;
  min-height: 140px;
  height: auto;
  max-height: 300px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  border: dashed 1px $primaryColor;
  cursor: pointer;
  background: #fff;
  border-radius: 10px;
  border: solid 1px #eee;
  box-shadow: rgb(15 41 77 / 8%) 0px 8px 20px 0px;
  justify-content: space-between;
  row-gap: 0.5em;
`;
export const PackageTitle = styled.div`
  font-weight: bold;
  color: #fff;
`;

export const PackageItemHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -0.5em;
  margin-right: -0.5em;
  margin-top: -0.5em;
  padding: 0.2em 0.8em;

`;
export const PackageItemBody = styled.div`
  line-height: 1;
`;

export const PackageItemFooter = styled.div`
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: -0.5em;
  margin-right: -0.5em;
  margin-bottom: -0.5em;
  padding: 0.4em 0.5em;
  font-size: 1.4em;
`;

// package info
export const PackageInfo = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  height: calc(100% - 80px);
  z-index: 13;
  width: 100%;
  transition: ease-in-out 0.1s;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(100%)")};
  -webkit-box-shadow: 0px -11px 16px 0px #cecece;
  box-shadow: 0px -11px 16px 0px #cecece;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  pos
`;
export const PackageInfoHeader = styled.div`
  margin-left: -0.5em;
  display: flex;
  span {
    flex: 1;
    text-align: center;
  }
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  font-size: 1.4em;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #eee;

  padding: 0.8em;
  color: #333;
  font-weight: bold;
  i {
    font-size: 1.3em;
  }
`;

export const AccommodationDetailList = styled.ul`
padding: 0;
margin:0;
  li{
    span{
      flex: 0 1 26%;
    }
    div{
      flex: 0 1 74%;
    }
    display: flex;
  }
`


export const PackageBodySection = styled.div``;
export const AccommodationTitle = styled.h6`
`;
export const PackageBody = styled.div`
  max-height: calc(100% - 80px);
  overflow-y: auto;
  ${PackageBodySection} {
    padding: 0.8em;
    border-bottom: solid 1px #eee;
    &:nth-last-child() {
      border-bottom: none;
    }
  }
`;
export const AccommodationAlbum = styled.div`
  max-height: 250px;
  width: 100%;
  margin-right: -1em;
  background: #f1f1f1;
`;

export const PricePackageContent = styled.div`
display: flex;
position: fixed;
bottom: 0;
background-color: #fff;
width: 100%;
align-items: center;
` 
export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`