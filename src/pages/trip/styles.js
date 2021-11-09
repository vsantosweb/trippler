import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Name = styled.h1`
  font-weight: 700;
`;
export const Description = styled.p``;
export const Info = styled.div``;

export const InfoDetails = styled.span`
  display: flex;
  flex-direction: column;
  align-items: ${({ justify }) => justify};
`;

export const SchedulesContainer = styled.div`
  padding: ${({ theme }) => theme.defaultContainer.spacing};
  background-color: #f5f5f5;


`
export const TripScheduleCard = styled.div`
  /* border: solid 1px #95979f; */
  margin-bottom: 10px;
  border-radius: ${({ theme }) => theme.defaultRadius};
  padding: 5px;
  background-color: #fff;
  /* box-shadow: 0 8px 6px -6px rgb(0 0 0 / 10%); */
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* padding: ${({ theme }) => theme.defaultContainer.spacing}; */

`

export const TripScheduleCardHeader = styled.div`
display: flex;
align-items: center;
`

export const TripScheduleCardBody = styled.div`
display: flex;
align-items: center;
margin: 10px 0;
gap: 10px;

`
export const TripScheduleCardFooter = styled.div`
display: flex;
border-top: solid 1px #e3e3e3;

justify-content: space-between;
align-items: center;
`
export const TripSchedulePrice = styled.div`
font-weight: bold;
font-size: 20px;
`
export const TripScheduleStatus = styled.div`
font-weight: bold;
color: green;
font-size: 12px;
padding: 0 3px;
border-radius: 4px;
`

export const TripScheduleBoardings = styled.div`
display: flex;
flex-wrap: wrap-reverse;
justify-content: flex-start;
gap: 3px;
flex: 1;
`
export const TripScheduleBoarding = styled.div`
 border:solid 1px ${({ theme }) => theme.colors.primary};
 color: ${({ theme }) => theme.colors.primary};
 padding:0 4px;
 border-radius: 4px;
 font-size: 12px;
`
export const TripScheduleBoardingIcon = styled.div`
 /* background-color: ${({ theme }) => theme.colors.secondary};; */
 height: 35px;
 flex: 0 0 35px;
 border-radius: 50px;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.4em;
`


export const InfoTop = styled.div``;
export const InfoPriceValue = styled.span``;

export const Vacancies = styled.div`
  color: #333;
`;

export const Period = styled.div`
  font-weight: bold;
  color: #555;
`;
export const Details = styled.section`
  padding: 0.8em;

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
  /* box-shadow: 0px -11px 16px 0px #cecece; */
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

export const TripFeaturesNav = styled.nav`
  padding: 0 0.8em;
`;
export const TripFeaturesNavList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const TripFeaturesNavListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const TripFeatureIcon = styled.li`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7em;
  background-color: #f1f1f1;
`;
