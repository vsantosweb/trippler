import styled from 'styled-components';


export const PackageItem = styled.div`
  width: 100%;
  min-height: 230px;
  height: auto;
  max-height: 300px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  border: dashed 1px $primaryColor;
  cursor: pointer;
  background: #fff;
  border-radius: ${({ theme }) => theme.radiusDefault};
  border: solid 1px #eee;
  box-shadow: rgb(15 41 77 / 8%) 0px 8px 20px 0px;
  gap: 0.5em;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  justify-content: space-between;
`;
export const PackageTitle = styled.h3`
  font-weight: bold;
  font-size: 1.4em;
  margin: 0;
`;

export const PackageItemHeader = styled.div`
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -0.5em;
  margin-right: -0.5em;
  margin-top: -0.5em;
  padding: 0.2em 0.8em;
`;
export const PackageItemBody = styled.div`
  line-height: 1;
  flex: 1;
`;

export const PackageItemFooter = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const PackageInfoContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0 ,0 ,0 , .5);
  top:0;  
  z-index: 1;
  display: flex;
  align-items: flex-end;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(100%)")};
  ${({ open }) => document.body.style.overflow = open ? 'hidden' : 'auto'}
`
export const PackageInfo = styled.div`
  background: #fff;
  position: relative;
  bottom: 0;
  height:85%;
  width: 100%;
  transition: ease-in-out 0.1s;
 
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-bottom: 2.4em;
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
  margin: 0;
  li {
    span {
      flex: 0 1 26%;
    }
    div {
      flex: 0 1 74%;
    }
    display: flex;
  }
`;

export const PackageBodySection = styled.div``;
export const AccommodationTitle = styled.h6``;
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

export const PackagePriceContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PackageAmount = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  color: #ff9800;
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
  border-top: solid 1px #eee;
  background-color: #fff;
  width: 100%;
  align-items: center;
  padding: 0.6em;
`;
export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 1.8em;
`;