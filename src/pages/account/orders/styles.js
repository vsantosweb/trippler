import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.defaultContainer.spacing};
  background-color: #eee;
  min-height: 100%;
  height: auto;
`;

export const Session = styled.div`
  background-color: #fff;
  margin-bottom: 6px;
  border-radius: ${({ theme }) => theme.defaultRadius};
`;
export const Trip = styled.div``;

export const SessionHeader = styled.div`
  padding: 8px;
  border-bottom: dashed 1px #ddd;
`;
export const SessionBody = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px; ;
`;

export const SessionFooter = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px; ;
`;
export const SessionTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: normal;
`;
export const SessionSubTitle = styled.div`
  font-size: 14px;
`;

export const CheckIn = styled.div`
  display: flex;
  justify-content: space-between;
  color: #838383;
`;
export const CheckInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheckTitle = styled.div`
  font-size: 16px;
`;
export const CheckDate = styled.div`
  font-size: 14px;
`;

export const Boarding = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;
export const BoardingLocation = styled.div``;
export const BoardingDepartureTime = styled.div``;
export const Passenger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const PassengerItem = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;

export const PassengerName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const TotalArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalAmount = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`;
export const PaymentMethods = styled.div`
  padding: ${({ theme }) => theme.defaultContainer.spacing};
`;
export const PaymentMethod = styled.div`
  border-radius: ${({ theme }) => theme.defaultRadius};
  justify-content: space-between;
  padding: 0.8em;
  margin-bottom: 7px;
  border: solid 1px #eee;

`;
export const PaymentMethodHeader = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderStatus = styled.div`
display: flex;
align-items: center;
gap: 10px;
border-top: solid 1px #eee;
padding-top: 7px;
`

export const StatusIcon = styled.div`
background-color: ${({ color }) => color === 1 ?'green' : color === 2 ? 'blue' : color === 3 ? 'orange' : color === 4 ? 'purpple' : ''};
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
padding: 1em;
color: #fff;
`
export const PaymentMethodName = styled.label``;
export const PaymentMethodControl = styled.div``;
export const PaymentMethodBody = styled.div`
    padding: .3em;
`;

