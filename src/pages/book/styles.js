import styled from 'styled-components';

export const Book = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.defaultContainer.spacing};
  background-color: #f0f2f5;
  height: 100vh;
`;

export const BookInfo = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius:  ${({ theme }) => theme.defaultRadius};;
  margin-bottom: ${({ theme }) => theme.defaultContainer.spacing};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const BookInfoBody = styled.div`
  padding: ${({ theme }) => theme.defaultContainer.spacing};
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const Boarding = styled.div`
 
`;
export const Trip = styled.div`
  width: 100%;
`;

export const BookInfoHeader = styled.div`
  width: 100%;
  margin:0;
  border-bottom: solid 1px #eee;
  padding: ${({ theme }) => theme.defaultContainer.spacing};
`;


export const TripName = styled.h4`
  width: 100%;
  margin: 0;
  font-weight: 500;
`;
export const BookPassenger = styled.div`
  width: 100%;
 display: flex;
 justify-content: space-between;
`;
export const BookCheckInfo = styled.div`
  display: flex;
  justify-content: space-between;

`;


export const Container = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radiusDefault};
  padding: 0.5em;
  /* border: solid 1px #eee; */
  display: flex;
  flex-direction: column;
`;
export const Thumbnail = styled.div`
  position: relative;
  margin-left: -0.4em;
  margin-right: -0.4em;
  margin-top: -0.4em;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    image-rendering: unset;
    border-top-left-radius: ${({ theme }) => theme.radiusDefault};
    border-top-right-radius: ${({ theme }) => theme.radiusDefault};
  }
`;

export const Title = styled.h5`
  font-weight: 600;
  line-height: 1.5;
  font-size: 14px;
  color: rgb(25, 31, 40);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`;


export const AddtPackagePassengerList = styled.ul`
  display: flex;
  overflow: auto;
  max-height: 430px;
  flex-direction: column;
  gap: 10px;
`;
export const AddtPackagePassengerListItem = styled.li`
  display: flex;
  padding: 0.3em;
  border-bottom: solid 1px #eee;
  span {
    flex: 1;
  }
`;

export const TotalAMount = styled.div`
  font-weight: bold;
  text-align: right;
`